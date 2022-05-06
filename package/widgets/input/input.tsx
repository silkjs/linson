import { type PropType, defineComponent } from "vue";
import { HTMLElementEvent } from "../../common/linson-type";
import { withInstall } from "../../utils/common";
import { InputEmits, InputProps } from "./types";

const emits: InputEmits = {
  blur: (e) => e.target instanceof HTMLInputElement,
  change: (e) => e.target instanceof HTMLInputElement,
  input: (e) => e.target instanceof HTMLInputElement,
  "update:value": (value) => typeof value === "string",
};

export const Input = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-input",
    props: {
      disabled: {
        default: (): InputProps["disabled"] => false,
        type: Boolean as PropType<InputProps["disabled"]>,
      },
      maxlength: {
        type: Number as PropType<InputProps["maxlength"]>,
      },
      minlength: {
        type: Number as PropType<InputProps["minlength"]>,
      },
      placeholder: {
        type: String as PropType<InputProps["placeholder"]>,
      },
      readonly: {
        default: (): InputProps["readonly"] => false,
        type: Boolean as PropType<InputProps["readonly"]>,
      },
      size: {
        default: (): InputProps["size"] => "medium",
        type: String as PropType<InputProps["size"]>,
      },
      status: {
        type: String as PropType<InputProps["status"]>,
      },
      type: {
        default: (): InputProps["type"] => "text",
        type: String as PropType<InputProps["type"]>,
      },
      value: {
        type: String as PropType<InputProps["value"]>,
      },
    },
    setup(props, { slots, emit }) {
      return () => (
        <div class={["l-input", {}]}>
          <input
            value={props.value}
            onBlur={(e) => {
              emit("input", e);
            }}
            onChange={(e) => {
              emit("input", e);
            }}
            onInput={(e) => {
              emit("input", e);
              emit("update:value", (e as HTMLElementEvent<HTMLInputElement>).target.value);
            }}
          />
        </div>
      );
    },
  })
);
