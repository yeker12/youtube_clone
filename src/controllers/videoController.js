let videos = [{
    title: "FIrst video",
    rating: 5,
    comments: 3,
    createdAt: "2 mins ago",
    views:1,
    id: 1, 
},
{
    title: "Second video",
    rating: 4.5,
    comments: 5,
    createdAt: "3 mins ago",
    views:43,
    id: 2,
},
{
    title: "Third video",
    rating: 3,
    comments: 2,
    createdAt: "4 mins ago",
    views:88,
    id: 3,
}];

export const homeVideo = (req, res) => {
    return res.render("home", {pageTitle: 'Home', videos});
}
export const watchVideos = (req, res) => {
    const id = req.params.id; //url에서 가져온 id
    const video = videos[id-1]; // videos 리스트에서 (id-1) 번째 객체
    return res.render("watch", {pageTitle: `Watching ${video.title}`, video:video});
}
export const getEdit = (req, res) => {
    const id = req.params.id; //url에서 가져온 id
    const video = videos[id-1]; // videos 리스트에서 (id-1) 번째 객체  
    return res.render("edit", {pageTitle: 'Edit', video:video });
}
export const postEdit = (req, res) => {
    const id = req.params.id;
    return res.redirect(`/videos/${id}`);
}
