import UserModel from "../models/User";
import bcycrt from "bcrypt";
import fetch from "node-fetch";

export const getJoin = (req, res) => res.render("join", {pageTitle: "Join"});
export const postJoin = async (req, res) => {
    const {email, username, password, password2, name, location} = req.body;
    // username 중복 입력 방지
    const usernameExsits = await UserModel.exists({ username });
    if(usernameExsits){
        return res.status(400).render("join", {pageTitle: "Join", errorMessage: "This username is already exsist!"});
    }
    // email 중복 입력 방지
    const emailExsits = await UserModel.exists( {email} );
    if(emailExsits){
        return res.status(400).render("join", {pageTitle: "Join", errorMessage: "This e-mail is already exsists!"});
    }
    if(password !== password2){
        return res.status(400).render("join", { pageTitle: "Join", errorMessage: "Passwords do not match"});
    }
    try{
        await UserModel.create({
            email, username, password, password2, name, location
        })
        return res.redirect("/login");
    } catch{
        return res.render("join", {pageTitle: "Join", errorMessage: error._mesage});
    }
   
}
export const getLogin = (req, res) => {
    return res.render("login", {pageTitle: "Login"});
}
export const postLogin = async (req, res) => {
    const {username, password} = req.body;
    var pageTitle = "login"
    // 계정 존재하는지 확인
    const exists = await UserModel.exists({ username });
    if(!exists) {
        return res.status(400).render("login", {pageTitle, errorMessage: "This account is not exist ❌"});
    }
    // 비밀번호 맞는지 확인
    const user = await UserModel.findOne({username});
    if(!user){
        return res.status(400).render("login", {pageTitle, errorMessage: "Wrong username"});
    }
    const loginOK = await bcycrt.compare(password, user.password);
    if(!loginOK){
        return res.status(400).render("login", {pageTitle, errorMessage: "Wrong Password"});
    }
    // 로그인 시 세션 추가
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
}

export const startGithubLogin = (req, res) => {
    const baseUrl = "https://github.com/login/oauth/authorize";
    const config = {
        client_id: process.env.GH_CLIENT_ID,
        allow_signup: "false",
        scope: "read:user user:email",
    }
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;
    return res.redirect(finalUrl);
}

export const finishGithubLogin = async (req, res) => {
    const baseURL = "https://github.com/login/oauth/authorize";
    const config = {
        client_id: process.env.GH_CLIENT_ID,
        client_secret: process.env.GH_SECRET,
        code: req.query.code,
    }
    const params = new URLSearchParams(config).toString();
    const finalURL = `${baseURL}?${params}`;
    const data = await fetch(finalURL, {
        method: POST,
        headers: {
            Accept: "application/json"
        }
    })
    const json = await data.json();
    console.log(json);
    
    res.send(JSON.stringify(json));
}

export const editUsers = (req, res) => res.send("Edit User!");
export const removeUsers = (req, res) => res.send("Remove Users");
export const logoutUser = (req, res) => res.send("Log out!");
export const seeUser = (req, res) => res.send("See user porfile!");