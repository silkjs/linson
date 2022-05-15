import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { getContent } from "../../utils/context";
import { RadioEmits, RadioProps } from "./types";

const emits: RadioEmits = {};

export const Radio = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-radio",
    props: {
      checked: {
        default: (): RadioProps["checked"] => false,
        type: Boolean as PropType<RadioProps["checked"]>,
      },
      disabled: {
        default: (): RadioProps["disabled"] => false,
        type: Boolean as PropType<RadioProps["disabled"]>,
      },
      label: {
        type: [String, Object, Function] as PropType<RadioProps["label"]>,
      },
      placeholder: {
        type: String as PropType<RadioProps["placeholder"]>,
      },
      readonly: {
        default: (): RadioProps["readonly"] => false,
        type: Boolean as PropType<RadioProps["readonly"]>,
      },
      size: {
        default: (): RadioProps["size"] => "medium",
        type: String as PropType<RadioProps["size"]>,
      },
      status: {
        type: String as PropType<RadioProps["status"]>,
      },
    },
    setup(props, { slots, emit }) {
      return () => {
        const label = getContent(props, slots, "label");
        return (
          <div
            onClick={() => {
              emit("update:checked", !props.checked);
            }}
            class={[
              "l-radio",
              {
                "l-radio-checked": props.checked,
                "l-radio-disabled": props.disabled,
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
