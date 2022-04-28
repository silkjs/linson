import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { TooltipEmits, TooltipProps } from "./tooltip-type";

const emits: TooltipEmits = {};

export const Tooltip = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-tooltip",
    props: {
      placement: {
        default: (): TooltipProps["placement"] => "top",
        type: String as PropType<TooltipProps["placement"]>,
      },
      title: String as PropType<TooltipProps["title"]>,
      trigger: {
        default: (): TooltipProps["trigger"] => "hover",
        type: String as PropType<TooltipProps["trigger"]>,
      },
    },
    setup() {
      return () => <div class={["l-tooltip", {}]}></div>;
    },
  })
);
