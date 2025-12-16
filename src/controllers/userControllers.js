import User from "../models/User.js";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
// ✅ “/join 주소로 들어오면 join.pug(ejs)를 그려서 사용자에게 보여줘라”
export const postJoin = async (req, res) => {
  console.log(req.body);
  const { name, username, email, password, password2, location } = req.body;
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: "Password confirmation does not match",
    });
  }
  const exist = await User.exists({ $or: [{ username }, { email }] });
  if (exist) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: "This username or email is already taken.",
    });
  }
  try {
    await User.create({ name, username, email, password, location });
    return res.redirect("/login");
  } catch (error) {
    return res
      .status(400)
      .render("join", { pageTitle: "Join", errorMessage: error._message });
  }
};

export const getLogin = (req, res) =>
  res.render("Login", { pageTitle: "Login" });

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const pageTitle = "Login";
  if (!user) {
    //exist하지말고 user라고 한 이유는 1) 동일 username 있는 User가 있는지 확인(exists) 2) 해당 유저의 비밀번호 갖고 오기 위함
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An Account with this username does not exist",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Wrong password",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  res.redirect("/");
};

export const logout = (req, res) => res.send("Logout");

export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Delete User");
export const see = (req, res) => res.send("See User");

export const finishGithubLogin = (req, res) => {};

export const startGithubLogin = (req, res) => {
  const baseUrl = "https://github.com/login/oauth/authorize";

  const config = {
    client_id: "Ov23liuOj6NY00HuRYXl",
    allow_signup: false,
    scope: "read:user user:email",
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;

  return res.redirect(finalUrl);
};
