import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { CheckboxEmits, CheckboxProps } from "./checkbox-type";

const emits: CheckboxEmits = {
  "update:checked": (value) => typeof value === "boolean",
  change: (value) => typeof value === "boolean",
};

export const Checkbox = withInstall(
  defineComponent({
    name: "l-checkbox",
    props: {
      checked: {
        type: Boolean as PropType<CheckboxProps["checked"]>,
        default: (): CheckboxProps["checked"] => false,
      },
      label: {
        type: String as PropType<CheckboxProps["label"]>,
      },
      disabled: {
        type: Boolean as PropType<CheckboxProps["disabled"]>,
        default: (): CheckboxProps["disabled"] => false,
      },
    },
    emits: { ...emits },
    setup() {
      return () => <div class={["l-checkbox", {}]}></div>;
    },
  })
);
