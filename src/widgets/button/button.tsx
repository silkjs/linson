import { defineComponent, PropType } from "vue";
import { ButtonProps, ButtonEmits } from "./button-type";

const emits: ButtonEmits = {
  click: (e: MouseEvent) => {},
};

export const Button = defineComponent({
  name: "l-button",
  props: {
    block: {
      type: Boolean as PropType<ButtonProps["block"]>,
      default: (): ButtonProps["block"] => false,
    },
    disabled: {
      type: Boolean as PropType<ButtonProps["disabled"]>,
      default: (): ButtonProps["disabled"] => false,
    },
    ghost: {
      type: Boolean as PropType<ButtonProps["ghost"]>,
      default: (): ButtonProps["ghost"] => false,
    },
    loading: {
      type: Boolean as PropType<ButtonProps["loading"]>,
      default: (): ButtonProps["loading"] => false,
    },
    size: {
      type: String as PropType<ButtonProps["size"]>,
      default: (): ButtonProps["size"] => "medium",
    },
    theme: {
      type: String as PropType<ButtonProps["theme"]>,
      default: (): ButtonProps["theme"] => "default",
    },
    type: {
      type: String as PropType<ButtonProps["type"]>,
      default: (): ButtonProps["type"] => "button",
    },
  },
  emits: {
    ...emits,
  },
  setup(props, { emit, slots }) {
    return () => (
      <button
        class={{}}
        type={props.type}
        onClick={(e) => {
          emit("click", e);
        }}
      >
        {slots?.default?.()}
      </button>
    );
  },
});

function Example() {
  return (
    <>
      <Button
        size="small"
        theme="primary"
        onClick={(e) => {
          e.preventDefault();
        }}
      />
    </>
  );
}
