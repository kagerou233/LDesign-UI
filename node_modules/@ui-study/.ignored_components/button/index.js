import Button from "./src/index.vue";
import { componentInstall } from "@ui-study/utils";
//提供按需加载的方式
export const LButton = componentInstall(Button);
export default LButton;
