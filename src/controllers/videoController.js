import VideoModel from "../models/Video";

// 비디오 홈화면
export const homeVideo = async(req, res) => {
    const videos = await VideoModel.find({});
    return res.render("home", { pageTitle: 'Home', videos});
}
// 비디오 보기 화면
export const watchVideos = async (req, res) => {
    const id = req.params.id;
    const video = await VideoModel.findById(id);
    if(!video){
        return res.render("404", {pageTitle: "❌Video Not Found!❌"});   
    } else{
        return res.render("watch", {pageTitle: video.title, video });
    }
}
// 비디오 수정하기 (GET)
export const getEdit = async (req, res) => {
    const id = req.params.id;
    const video = await VideoModel.findById(id);
    if(!video){
        return res.render("404", {pageTitle: "❌Video Not Found!❌"});
    } else{
        return res.render("edit", {pageTitle: `Edit ${video.title}`, video});
    }
}
// 비디오 수정하기 (POST)
export const postEdit = async (req, res) => {
    const id = req.params.id;
    const {title, description, hashtags} = req.body;
    const video = await VideoModel.exists({ _id : id });
    console.log(id);
    if(!video){
        return res.render("404", {pageTitle: "❌Video Not Found!❌"});
    } else{
    await VideoModel.findByIdAndUpdate(id, {
        title:title,
        description:description,
        hashtags:hashtags,
    })
    }
    return res.redirect(`/videos/${id}`);
}
// 비디오 업로드하기 (GET)
export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: "Upload Video"});
}
// 비디오 업로드하기 (POST)
export const postUpload = async (req, res) => {
    const { title, description, hashtags } = req.body;
    try{
        const video = new VideoModel({
            title: title,
            description: description,
            hashtags,
        })
        await video.save();
        return res.redirect("/");
    }
    catch(error){
        return res.render("upload", {pageTitle: "Upload Video", errorMessage: error._mesage});
    }
    
}