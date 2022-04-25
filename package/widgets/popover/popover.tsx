import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { PopoverEmits, PopoverProps } from "./popover-type";

const emits: PopoverEmits = {};

export const Popover = withInstall(
  defineComponent({
    name: "l-popover",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-popover", {}]}></div>;
    },
  })
);
