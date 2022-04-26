import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { TabsEmits, TabsProps } from "./tabs-type";

const emits: TabsEmits = {};

export const Tabs = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-tabs",
    props: {},
    setup() {
      return () => <div class={["l-tabs", {}]}></div>;
    },
  })
);
