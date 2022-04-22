import { defineComponent, type PropType } from "vue";
import { CheckboxProps, CheckboxEmits } from "./checkbox-type";

const emits: CheckboxEmits = {};

export const Checkbox = defineComponent({
  name: "l-checkbox",
  props: {},
  emits: { ...emits },
  setup() {
    return () => <div class={["l-checkbox", {}]}></div>;
  },
});
