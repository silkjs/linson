import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { InputNumberEmits, InputNumberProps } from "./types";

const emits: InputNumberEmits = {};

export const InputNumber = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-input-number",
    props: {
      disabled: Boolean as PropType<InputNumberProps["disabled"]>,
      placeholder: String as PropType<InputNumberProps["placeholder"]>,
      readonly: Boolean as PropType<InputNumberProps["readonly"]>,
      size: String as PropType<InputNumberProps["size"]>,
      status: String as PropType<InputNumberProps["status"]>,
      value: Number as PropType<InputNumberProps["value"]>,
    },
    setup() {
      return () => <div class={["l-input-number", {}]}></div>;
    },
  })
);
