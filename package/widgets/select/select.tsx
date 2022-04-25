import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { SelectEmits, SelectProps } from "./select-type";

const emits: SelectEmits = {};

export const Select = withInstall(
  defineComponent({
    name: "l-select",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-select", {}]}></div>;
    },
  })
);
