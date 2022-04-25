import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { CheckboxGroupEmits, CheckboxGroupProps } from "./checkbox-group-type";

const emits: CheckboxGroupEmits = {
  "update:value": (value) => typeof value === "boolean",
  change: (value) => typeof value === "boolean",
};

export const CheckboxGroup = withInstall(
  defineComponent({
    name: "l-checkbox",
    props: {
      disabled: {
        type: Boolean as PropType<CheckboxGroupProps["disabled"]>,
        default: (): CheckboxGroupProps["disabled"] => false,
      },
    },
    emits: { ...emits },
    setup() {
      return () => <div class={["l-checkbox", {}]}></div>;
    },
  })
);
