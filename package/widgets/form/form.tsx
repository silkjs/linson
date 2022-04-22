import { defineComponent, type PropType } from "vue";
import { FormProps, FormEmits } from "./form-type";

const emits: FormEmits = {};

export const Form = defineComponent({
  name: "l-form",
  props: {},
  emits: { ...emits },
  setup() {
    return () => <div class={["l-form", {}]}></div>;
  },
});
