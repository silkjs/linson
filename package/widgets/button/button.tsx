import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { getContent } from "../../utils/context";
import { ButtonEmits, ButtonProps } from "./button-type";

const emits: ButtonEmits = {
  click: (e: MouseEvent) => {
    return e instanceof MouseEvent;
  },
};

export const Button = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-button",
    props: {
      block: {
        default: (): ButtonProps["block"] => false,
        type: Boolean as PropType<ButtonProps["block"]>,
      },
      content: {
        type: [String, Object, Function] as PropType<ButtonProps["content"]>,
      },
      disabled: {
        default: (): ButtonProps["disabled"] => false,
        type: Boolean as PropType<ButtonProps["disabled"]>,
      },
      ghost: {
        default: (): ButtonProps["ghost"] => false,
        type: Boolean as PropType<ButtonProps["ghost"]>,
      },
      loading: {
        default: (): ButtonProps["loading"] => false,
        type: Boolean as PropType<ButtonProps["loading"]>,
      },
      size: {
        default: (): ButtonProps["size"] => "medium",
        type: String as PropType<ButtonProps["size"]>,
      },
      theme: {
        default: (): ButtonProps["theme"] => "default",
        type: String as PropType<ButtonProps["theme"]>,
      },
      type: {
        default: (): ButtonProps["type"] => "button",
        type: String as PropType<ButtonProps["type"]>,
      },
      variant: {
        default: (): ButtonProps["variant"] => "base",
        type: String as PropType<ButtonProps["variant"]>,
      },
    },
    setup(props, { emit, slots }) {
      return () => {
        const content = getContent(props, slots, "content");
        return (
          <button
            class={[
              "l-button",
              `l-button-theme-${props.theme}`,
              `l-button-variant-${props.variant}`,
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
  })
);
