import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { SwitchEmits, SwitchProps } from "./types";

const emits: SwitchEmits = {
  "update:checked": (value) => typeof value === "boolean",
};

export const Switch = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-switch",
    props: {
      checked: {
        default: (): SwitchProps["checked"] => false,
        type: Boolean as PropType<SwitchProps["checked"]>,
      },
      disabled: {
        default: (): SwitchProps["disabled"] => false,
        type: Boolean as PropType<SwitchProps["disabled"]>,
      },
      readonly: {
        default: (): SwitchProps["readonly"] => false,
        type: Boolean as PropType<SwitchProps["readonly"]>,
      },
      size: {
        default: (): SwitchProps["size"] => "medium",
        type: String as PropType<SwitchProps["size"]>,
      },
      status: {
        type: String as PropType<SwitchProps["status"]>,
      },
    },
    setup(props, { emit }) {
      return () => (
        <label
          onClick={() => {
            emit("update:checked", !props.checked);
          }}
          class={[
            "l-switch",
            {
              "l-switch-checked": props.checked,
            },
          ]}
        ></label>
      );
    },
  })
);
