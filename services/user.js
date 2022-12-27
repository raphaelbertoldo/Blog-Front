import axios from "axios";
import auth from "../middleware/auth";
import $store from "../store/index";
// import { api } from "./api";

export default async (user) => {
  const { email, password } = user;
  await axios
    .post("http://54.94.127.207:4444/api/v1/login", {
      email: email,
      password: password,
    })
    .then(function (response) {
      // console.log("🚀 ~ file: user.js:14 ~ response", response.data.user.id);

      window.$nuxt.$store.commit("setUser", {
        email: email,
        user_id: response.data.user.id,
        tk: response.data.accessToken,
      });
      localStorage.setItem("tk", response.data.accessToken);
      axios.defaults.headers.common["x-access-token"] = `${localStorage.getItem(
        "tk"
      )}`;

      // window.$nuxt.context.redirect("/profile");

      // console.log("🚀 ~ file: user.js:23 ~ window.$nuxt", window.$nuxt.$route);
      // console.log(
      //   "🚀 ~ file: user.js:25 ~ window.$nuxt.$store",
      //   window.$nuxt.$store.state
      // );
      return { email };
    })
    .catch(function (error) {
      console.log(error);
    });
};
