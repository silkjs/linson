import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { PopoverEmits, PopoverProps } from "./popover-type";

const emits: PopoverEmits = {};

export const Popover = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-popover",
    props: {
      placement: {
        default: (): PopoverProps["placement"] => "top",
        type: String as PropType<PopoverProps["placement"]>,
      },
      title: String as PropType<PopoverProps["title"]>,
      trigger: {
        default: (): PopoverProps["trigger"] => "hover",
        type: String as PropType<PopoverProps["trigger"]>,
      },
    },
    setup() {
      return () => <div class={["l-popover", {}]}></div>;
    },
  })
);
