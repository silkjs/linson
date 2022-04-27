import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { FormItemEmits, FormItemProps } from "./form-item-type";

const emits: FormItemEmits = {};

export const FormItem = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-form-item",
    props: {
      lable: String as PropType<FormItemProps["lable"]>,
      rules: Array as PropType<FormItemProps["rules"]>,
      size: String as PropType<FormItemProps["size"]>,
    },
    setup(props, { slots }) {
      return () => <div class={["l-form-item", {}]}>{slots.default?.()}</div>;
    },
  })
);
