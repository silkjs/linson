import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { PopoverEmits, PopoverProps } from "./popover-type";

const emits: PopoverEmits = {};

export const Popover = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-popover",
    props: {},
    setup() {
      return () => <div class={["l-popover", {}]}></div>;
    },
  })
);
