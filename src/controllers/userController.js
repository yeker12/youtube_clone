import UserModel from "../models/User";

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
    await UserModel.create({
        email, username, password, password2, name, location
    })
    return res.redirect("/login");
}
export const editUsers = (req, res) => res.send("Edit User!");
export const removeUsers = (req, res) => res.send("Remove Users");
export const loginUser = (req, res) => res.send("Log in!");
export const logoutUser = (req, res) => res.send("Log out!");
export const seeUser = (req, res) => res.send("See user porfile!");