import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { RadioGroupEmits, RadioGroupProps } from "./radio-group-type";

const emits: RadioGroupEmits = {};

export const RadioGroup = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-radio-group",
    props: {
      disabled: Boolean as PropType<RadioGroupProps["disabled"]>,
      placeholder: String as PropType<RadioGroupProps["placeholder"]>,
      readonly: Boolean as PropType<RadioGroupProps["readonly"]>,
      size: String as PropType<RadioGroupProps["size"]>,
      status: String as PropType<RadioGroupProps["status"]>,
      value: String as PropType<RadioGroupProps["value"]>,
    },
    setup() {
      return () => <div class={["l-radio-group", {}]}></div>;
    },
  })
);
