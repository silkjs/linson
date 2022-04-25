import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { TooltipEmits, TooltipProps } from "./tooltip-type";

const emits: TooltipEmits = {};

export const Tooltip = withInstall(
  defineComponent({
    name: "l-tooltip",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-tooltip", {}]}></div>;
    },
  })
);
