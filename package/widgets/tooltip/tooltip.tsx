import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { TooltipEmits, TooltipProps } from "./tooltip-type";

const emits: TooltipEmits = {};

export const Tooltip = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-tooltip",
    props: {},
    setup() {
      return () => <div class={["l-tooltip", {}]}></div>;
    },
  })
);
