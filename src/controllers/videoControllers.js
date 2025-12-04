// 이전 수업용 fake data >> 따라서 아래 있었던 video 관련한 것 다 삭제
// let videos = [
//   {
//     title: "First Video",
//     rating: 5,
//     comments: 2,
//     createAt: "2minutes ago",
//     views: 1,
//     id: 1,
//   },
//   {
//     title: "Second Video",
//     rating: 5,
//     comments: 2,
//     createAt: "2minutes ago",
//     views: 59,
//     id: 2,
//   },
//   {
//     title: "Third Video",
//     rating: 5,
//     comments: 2,
//     createAt: "2minutes ago",
//     views: 59,
//     id: 3,
//   },
// ];

import Video from "../models/video";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home" });
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
