export const trending = (req, res) => res.render("home");
export const see = (req, res) => {
  res.send(`See Video #${req.params.id}`);
};
export const search = (req, res) => res.send("Search Videos");
export const edit = (req, res) => {
  res.send(`Edit Video #${req.params.id}`);
};

export const deleteVideo = (req, res) => {
  res.send(`Delete Video #${req.params.id}`);
};
export const upload = (req, res) => res.send("Upload Video");
