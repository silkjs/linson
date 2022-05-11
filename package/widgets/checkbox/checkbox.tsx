import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { getContent } from "../../utils/context";
import { CheckboxEmits, CheckboxProps } from "./types";

const emits: CheckboxEmits = {
  change: (value) => typeof value === "boolean",
  "update:checked": (value) => typeof value === "boolean",
};

export const Checkbox = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-checkbox",
    props: {
      checked: Boolean as PropType<CheckboxProps["checked"]>,
      disabled: Boolean as PropType<CheckboxProps["disabled"]>,
      label: String as PropType<CheckboxProps["label"]>,
    },
    setup(props, { slots }) {
      return () => {
        const label = getContent(props, slots, "label");
        return (
          <div class={["l-checkbox", {}]}>
            <input type="checkbox" />
            <label>{label}</label>
          </div>
        );
      };
    },
  })
);
