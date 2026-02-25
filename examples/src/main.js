import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//全局注册
// import Yt from "../../packages/index.js";
const app = createApp(App);
// app.use(Yt);
app.mount("#app");
