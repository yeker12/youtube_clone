export const homeVideo = (req, res) => res.send("Home");
export const watchVideos = (req, res) => {
    return res.send(`watch ${req.params.id}`);
}
export const editVideos = (req, res) => {
    return res.send(`edit ${req.params.id}`);
}
export const removeVideos = (req, res) => {
    return res.send(`delete ${req.params.id}`);
}
export const searchVideo = (req, res) => res.send("Search video what you want!");
export const uploadVideo = (req, res) => res.send("Upload the video");