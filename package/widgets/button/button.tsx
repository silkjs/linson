import { defineComponent, type PropType } from "vue";
import { ButtonProps, ButtonEmits } from "./button-type";

const emits: ButtonEmits = {
  click: (e: MouseEvent) => {
    return e instanceof MouseEvent;
  },
};

export const Button = defineComponent({
  name: "l-button",
  props: {
    block: {
      type: Boolean as PropType<ButtonProps["block"]>,
      default: (): ButtonProps["block"] => false,
    },
    content: {
      type: [String, Function] as PropType<ButtonProps["content"]>,
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
    variant: {
      type: String as PropType<ButtonProps["variant"]>,
      default: (): ButtonProps["variant"] => "base",
    },
  },
  emits: { ...emits },
  setup(props, { emit, slots }) {
    return () => {
      const content =
        typeof props.content === "undefined"
          ? slots.default?.()
          : typeof props.content === "string"
          ? props.content
          : props.content();
      return (
        <button
          class={[
            "l-button",
            `l-button--theme-${props.theme}`,
            `l-button--variant-${props.variant}`,
            {
              "l-size-full-width": props.block,
            },
          ]}
          type={props.type}
          onClick={(e) => {
            emit("click", e);
          }}
        >
          {content}
        </button>
      );
    };
  },
});
