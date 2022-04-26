import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { DropdownEmits, DropdownProps } from "./dropdown-type";

const emits: DropdownEmits = {};

export const Dropdown = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-dropdown",
    props: {},
    setup() {
      return () => <div class={["l-dropdown", {}]}></div>;
    },
  })
);
