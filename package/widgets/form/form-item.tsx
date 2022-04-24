import { defineComponent, type PropType } from "vue";
import { withInstall } from "../../utils/common";
import { FormItemProps, FormItemEmits } from "./form-item-type";

const emits: FormItemEmits = {};

export const FormItem = withInstall(
  defineComponent({
    name: "l-form-item",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-form-item", {}]}></div>;
    },
  })
);
