import "@silkjs/linson/dist/linson.css";
import "./style.scss";
import { createApp } from "vue";
import { App } from "./app";
import { Linson } from "@silkjs/linson";

const app = createApp(App);

app.use(Linson);
app.mount("#app");
