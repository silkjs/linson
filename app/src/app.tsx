import { defineComponent } from "vue";

import { Development } from "./views/development";
import { Production } from "./views/production";

export const App = defineComponent({
  setup() {
    return () => (import.meta.env.DEV ? <Development /> : <Production />);
  },
});
