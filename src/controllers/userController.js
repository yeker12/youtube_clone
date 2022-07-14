import UserModel from "../models/User";

export const getJoin = (req, res) => res.render("join", {pageTitle: "Create Account"});
export const postJoin = async (req, res) => {
    const {email, username, password, name, location} = req.body;
    await UserModel.create({
        email, username, password, name, location
    })
    return res.redirect("/login");
}
export const editUsers = (req, res) => res.send("Edit User!");
export const removeUsers = (req, res) => res.send("Remove Users");
export const loginUser = (req, res) => res.send("Log in!");
export const logoutUser = (req, res) => res.send("Log out!");
export const seeUser = (req, res) => res.send("See user porfile!");