import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
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
      block: Boolean as PropType<ButtonProps["block"]>,
      content: [String, Function] as PropType<ButtonProps["content"]>,
      disabled: Boolean as PropType<ButtonProps["disabled"]>,
      ghost: Boolean as PropType<ButtonProps["ghost"]>,
      loading: Boolean as PropType<ButtonProps["loading"]>,
      size: String as PropType<ButtonProps["size"]>,
      theme: String as PropType<ButtonProps["theme"]>,
      type: String as PropType<ButtonProps["type"]>,
      variant: String as PropType<ButtonProps["variant"]>,
    },
    setup(props, { emit, slots }) {
      props.variant;
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
  })
);
