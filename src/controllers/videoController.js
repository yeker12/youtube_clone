import { trusted } from "mongoose";
import VideoModel from "../models/Video";

// 비디오 홈화면
export const homeVideo = async(req, res) => {
    try{
        const video = await VideoModel.find({});
        return res.render("home", {pageTitle: 'Home', videos: []});
    } catch(error) {
        return res.render("Server-Error: ", {error});
    }
    
}
// 비디오 보기 화면
export const watchVideos = (req, res) => {
    const id = req.params.id; //url에서 가져온 id
    return res.render("watch", {pageTitle: `Watching` });
}
// 비디오 수정하기 (GET)
export const getEdit = (req, res) => {
    const id = req.params.id; //url에서 가져온 id
    return res.render("edit", {pageTitle: 'Edit'});
}
// 비디오 수정하기 (POST)
export const postEdit = (req, res) => {
    const id = req.params.id;
    return res.redirect(`/videos/${id}`);
}
// 비디오 업로드하기 (GET)
export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: "Upload Video"});
}
// 비디오 업로드하기 (POST)
export const postUpload = (req, res) => {
    const title = req.body.title;
       return res.redirect("/");
}