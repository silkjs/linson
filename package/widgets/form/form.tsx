import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { FormEmits, FormProps } from "./types";

const emits: FormEmits = {};

export const Form = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-form",
    props: {
      disabled: Boolean as PropType<FormProps["disabled"]>,
      readonly: Boolean as PropType<FormProps["readonly"]>,
      size: String as PropType<FormProps["size"]>,
    },
    setup(props, { slots }) {
      return () => <div class={["l-form", {}]}>{slots.default?.()}</div>;
    },
  })
);
