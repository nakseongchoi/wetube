import express from "express";
import Video from "../models/video";

// export const home = (req, res) => {
//   console.log("start");
//   Video.find({}, (error, videos) => {
//     if (error) {
//       return res.render("server-error");
//     }
//     console.log("hello");
//     return res.render("home", { pageTitle: "Home", videos });
//   });
//   console.log("i finish first");
// };

export const home = async (req, res) => {
  try {
    console.log("start");
    const videos = await Video.find({});
    console.log("finished");
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    res.render("server-error");
  }
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
