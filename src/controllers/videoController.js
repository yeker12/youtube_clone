export const homeVideo = (req, res) => res.render("home", {pageTitle: 'Home'});
export const watchVideos = (req, res) => res.render("watch", {pageTitle: "Watch"});
export const editVideos = (req, res) => res.render("edit", {pageTitle: 'Edit'});
export const removeVideos = (req, res) => {
    return res.send(`delete ${req.params.id}`);
}
export const searchVideo = (req, res) => res.send("Search video what you want!");
export const uploadVideo = (req, res) => res.send("Upload the video");