// 这是组件库的入口
//按需加载
export * from "./components/index";
//全局加载
import components from "./components.js";
const install = function (app) {
  if (install.installed) return;
  components.forEach((c) => app.use(c));
};
export default install;
