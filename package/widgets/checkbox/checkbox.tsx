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
      checked: {
        default: (): CheckboxProps["checked"] => false,
        type: Boolean as PropType<CheckboxProps["checked"]>,
      },
      disabled: {
        default: (): CheckboxProps["disabled"] => false,
        type: Boolean as PropType<CheckboxProps["disabled"]>,
      },
      label: {
        type: String as PropType<CheckboxProps["label"]>,
      },
    },
    setup(props, { emit, slots }) {
      return () => {
        const label = getContent(props, slots, "label");
        return (
          <div
            onClick={() => {
              emit("update:checked", !props.checked);
            }}
            class={[
              "l-checkbox",
              {
                "l-checkbox-checked": props.checked,
                "l-checkbox-disabled": props.disabled,
              },
            ]}
          >
            <label>{label}</label>
          </div>
        );
      };
    },
  })
);
