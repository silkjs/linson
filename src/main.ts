import "./theme.scss";
import "./style.scss";
import { createApp } from "vue";
import { App } from "./app";

async function application() {
  const app = createApp(App);
  app.mount("#app");
}

application().catch((err) => {
  console.log(err);
});
