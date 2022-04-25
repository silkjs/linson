import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { DropdownEmits, DropdownProps } from "./dropdown-type";

const emits: DropdownEmits = {};

export const Dropdown = withInstall(
  defineComponent({
    name: "l-dropdown",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-dropdown", {}]}></div>;
    },
  })
);
