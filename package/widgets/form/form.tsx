import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { FormEmits, FormProps } from "./form-type";

const emits: FormEmits = {};

export const Form = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-form",
    props: {
      disabled: Boolean as PropType<FormProps["disabled"]>,
      group: Object as PropType<FormProps["group"]>,
      readonly: Boolean as PropType<FormProps["readonly"]>,
      size: String as PropType<FormProps["size"]>,
    },
    setup(props, { slots }) {
      return () => <div class={["l-form", {}]}>{slots.default?.()}</div>;
    },
  })
);
