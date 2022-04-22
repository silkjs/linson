import { defineComponent, type PropType } from "vue";
import { FormItemProps, FormItemEmits } from "./form-item-type";

const emits: FormItemEmits = {};

export const FormItem = defineComponent({
  name: "l-form-item",
  props: {},
  emits: { ...emits },
  setup() {
    return () => <div class={["l-form-item", {}]}></div>;
  },
});
