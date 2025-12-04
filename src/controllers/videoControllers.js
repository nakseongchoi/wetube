let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createAt: "2minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createAt: "2minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createAt: "2minutes ago",
    views: 59,
    id: 3,
  },
];
export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  videos[id - 1].title = title;
  res.redirect(`/videos/${id}`);
};

export const search = (req, res) => res.send("Search Videos");
export const deleteVideo = (req, res) => {
  res.send(`Delete Video #${req.params.id}`);
};

export const upload = (req, res) => res.send("Upload Video");

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  //here we will add a video to the videos array
  console.log(req.body);
  const title = req.body.title;
  const newVideo = {
    title: title,
    rating: 0,
    comments: 0,
    createAt: "just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  res.redirect("/");
};
