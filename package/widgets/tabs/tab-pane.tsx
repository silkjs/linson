import { type PropType, defineComponent, inject } from "vue";
import { withInstall } from "../../utils/common";
import { TABS_API_INJECTION_KEY, TabPaneEmits, TabPaneProps } from "./types";

const emits: TabPaneEmits = {};

export const TabPane = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-tab-pane",
    props: {
      name: String as PropType<TabPaneProps["name"]>,
      tab: [String, Function] as PropType<TabPaneProps["tab"]>,
    },
    setup(props, { slots }) {
      return () => <div class={["l-tab-pane", {}]}>{slots.default?.()}</div>;
    },
  })
);
