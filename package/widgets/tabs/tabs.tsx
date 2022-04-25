import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { TabsEmits, TabsProps } from "./tabs-type";

const emits: TabsEmits = {};

export const Tabs = withInstall(
  defineComponent({
    name: "l-tabs",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-tabs", {}]}></div>;
    },
  })
);
