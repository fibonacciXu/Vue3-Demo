import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App); // 通过 createApp 初始化 app
app.mount("#root"); // 将页面挂载到 root 节点
