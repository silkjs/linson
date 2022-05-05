import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { SelectEmits, SelectProps } from "./types";

const emits: SelectEmits = {};

export const Select = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-select",
    props: {
      disabled: Boolean as PropType<SelectProps["disabled"]>,
      placeholder: String as PropType<SelectProps["placeholder"]>,
      readonly: Boolean as PropType<SelectProps["readonly"]>,
      size: String as PropType<SelectProps["size"]>,
      status: String as PropType<SelectProps["status"]>,
      value: String as PropType<SelectProps["value"]>,
    },
    setup() {
      return () => <div class={["l-select", {}]}></div>;
    },
  })
);
