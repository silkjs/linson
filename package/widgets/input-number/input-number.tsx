import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { InputNumberEmits, InputNumberProps } from "./input-number-type";

const emits: InputNumberEmits = {};

export const InputNumber = withInstall(
  defineComponent({
    name: "l-input-number",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-input-number", {}]}></div>;
    },
  })
);
