import { defineComponent } from "vue";
import { ModeDevelopment } from "./mode-development";
import { ModeProduction } from "./mode-production";

export const App = defineComponent({
  setup() {
    return () => {
      switch (import.meta.env.MODE) {
        case "pkg":
          return <ModeProduction />;

        default:
          return <ModeDevelopment />;
      }
    };
  },
});
