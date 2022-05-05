import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { CheckboxGroupEmits, CheckboxGroupProps } from "./types";

const emits: CheckboxGroupEmits = {
  change: (value) => typeof value === "boolean",
  "update:value": (value) => typeof value === "boolean",
};

export const CheckboxGroup = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-checkbox",
    props: {
      disabled: Boolean as PropType<CheckboxGroupProps["disabled"]>,
      options: Array as PropType<CheckboxGroupProps["options"]>,
      readonly: Boolean as PropType<CheckboxGroupProps["readonly"]>,
      size: String as PropType<CheckboxGroupProps["size"]>,
      status: String as PropType<CheckboxGroupProps["status"]>,
      value: Array as PropType<CheckboxGroupProps["value"]>,
    },
    setup() {
      return () => <div class={["l-checkbox", {}]}></div>;
    },
  })
);
