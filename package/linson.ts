import "./common/styles/styles.scss";
import "./common/styles/common.scss";
import { type App } from "vue";
import { register } from "./utils/common";
import { version } from "../package.json";
import * as components from "./components";

export * from "./components";

export default {
  install: (app: App) => {
    Object.keys(components).forEach((key) => {
      const widget = components[key as keyof typeof components];
      register(app, widget.name, widget);
    });
  },
  version,
};
