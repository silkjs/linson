import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { InputEmits, InputProps } from "./types";

const emits: InputEmits = {
  blur: () => true,
  change: (value: string) => typeof value === "string",
  input: (value: string) => typeof value === "string",
  "update:value": (value: string) => typeof value === "string",
};

export const Input = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-input",
    props: {
      disabled: Boolean as PropType<InputProps["disabled"]>,
      maxlength: Number as PropType<InputProps["maxlength"]>,
      minlength: Number as PropType<InputProps["minlength"]>,
      placeholder: String as PropType<InputProps["placeholder"]>,
      readonly: Boolean as PropType<InputProps["readonly"]>,
      size: String as PropType<InputProps["size"]>,
      status: String as PropType<InputProps["status"]>,
      type: String as PropType<InputProps["type"]>,
      value: String as PropType<InputProps["value"]>,
    },
    setup(props, { slots, emit }) {
      return () => (
        <div class={["l-input", {}]}>
          <input
            onBlur={() => {
              emit("blur");
            }}
            onChange={() => {
              emit("change", "");
            }}
            onInput={() => {
              emit("input", "");
            }}
          />
        </div>
      );
    },
  })
);
