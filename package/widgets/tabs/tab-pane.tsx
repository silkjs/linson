import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { TabPaneEmits, TabPaneProps } from "./tab-pane-type";

const emits: TabPaneEmits = {};

export const TabPane = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-tab-pane",
    props: {},
    setup() {
      return () => <div class={["l-tab-pane", {}]}></div>;
    },
  })
);
