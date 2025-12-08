import express from "express";
import Video from "../models/video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  console.log(videos);
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = async (req, res) => {
  const id = req.params.id;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  }
  return res.render("watch", { pageTitle: video.title, video });
};

export const getEdit = async (req, res) => {
  const id = req.params.id;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  }
  return res.render("edit", { pageTitle: `edit ${video.title}`, video });
};
export const postEdit = async (req, res) => {
  const id = req.params.id;
  const { title, description, hashtags } = req.body;
  console.log(req.body);
  const video = await Video.exists({ _id: id });
  // const video = await Video.findById(id); 같은거임
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: hashtags
      .split(", ")
      .map((word) => (word.startsWith(`#`) ? word : `#${word}`)),
  });
  // video.title = title; 위에 것과 같음
  // video.description = description;
  // video.hashtags = hashtags
  //   .split(", ")
  //   .map((word) => (word.startsWith(`#`) ? word : `#${word}`));
  // await video.save();
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
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      // createdAt: Date.now(),
      hashtags,
      // meta: {
      //   views: 0,
      //   rating: 0,
      // },
    });
    return res.redirect("/");
    console.log(videos[0], hahtags);
  } catch (error) {
    console.log(error);
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
