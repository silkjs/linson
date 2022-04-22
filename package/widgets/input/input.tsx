import { defineComponent, type PropType } from "vue";
import { InputProps, InputEmits } from "./input-type";

const emits: InputEmits = {};

export const Input = defineComponent({
  name: "l-input",
  props: {},
  emits: { ...emits },
  setup() {
    return () => <div class={["l-input", {}]}></div>;
  },
});
