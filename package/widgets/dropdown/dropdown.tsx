import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { DropdownEmits, DropdownProps } from "./dropdown-type";

const emits: DropdownEmits = {};

export const Dropdown = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-dropdown",
    props: {
      content: {
        type: [String, Function] as PropType<DropdownProps["content"]>,
      },
      placement: {
        default: (): DropdownProps["placement"] => "bottom",
        type: String as PropType<DropdownProps["placement"]>,
      },
      trigger: {
        default: (): DropdownProps["trigger"] => "hover",
        type: String as PropType<DropdownProps["trigger"]>,
      },
    },
    setup() {
      return () => <div class={["l-dropdown", {}]}></div>;
    },
  })
);
