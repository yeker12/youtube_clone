const fakeUser = {
    userName: "Yejin",
    loggedIn: true,
}

export const homeVideo = (req, res) => {
    const videos = [{
        title: "FIrst video",
        rating: 5,
        comments: 3,
        createdAt: "2 mins ago",
        views:59,
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
    res.render("home", {pageTitle: 'Home', fakeUser:fakeUser, videos});
}
export const watchVideos = (req, res) => res.render("watch", {pageTitle: "Watch"});
export const editVideos = (req, res) => res.render("edit", {pageTitle: 'Edit'});
export const removeVideos = (req, res) => {
    return res.send(`delete ${req.params.id}`);
}
export const searchVideo = (req, res) => res.send("Search video what you want!");
export const uploadVideo = (req, res) => res.send("Upload the video");