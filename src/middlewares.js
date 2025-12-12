export const localsMiddleware = (req, res, next) => {
  //   if (req.session.loggedIn === true) {
  //     // req.session.loggedIn === true라고 안하고 req.session.loggedIn이라고만 해도 됨
  //     res.locals.loggedIn = true;
  //   }
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user;
  next();
};
