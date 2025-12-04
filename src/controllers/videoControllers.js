import Video from "../models/video";

const handleSearch = (err, videos) => {
  console.log("errs", err);
  console.log("videos", videos);
};

export const home = (req, res) => {
  console.log("Starting Search");
  Video.find({}, handleSearch);
  console.log("I should be the last one");
  res.render("home", { pageTitle: "Home", videos: [] });
};
export const watch = (req, res) => {
  const id = req.params.id;
  res.render("watch", { pageTitle: `Watching` });
};

export const getEdit = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
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
  const title = req.body.title;
  res.redirect("/");
};
