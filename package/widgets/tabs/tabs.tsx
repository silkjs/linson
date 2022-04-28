import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { TabsEmits, TabsProps } from "./tabs-type";

const emits: TabsEmits = {
  "update:value": (value) => typeof value === "string",
};

export const Tabs = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-tabs",
    props: {
      placement: {
        default: (): TabsProps["placement"] => "top",
        type: String as PropType<TabsProps["placement"]>,
      },
      size: {
        default: (): TabsProps["size"] => "medium",
        type: String as PropType<TabsProps["size"]>,
      },
      value: {
        type: String as PropType<TabsProps["value"]>,
      },
    },
    setup(props, { slots, emit }) {
      return () => <div class={["l-tabs", {}]}>{slots.default?.()}</div>;
    },
  })
);
