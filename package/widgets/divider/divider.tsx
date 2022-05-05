import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { DividerEmits, DividerProps } from "./types";

const emits: DividerEmits = {};

export const Divider = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-divider",
    props: {
      align: {
        default: (): DividerProps["align"] => "center",
        type: String as PropType<DividerProps["align"]>,
      },
      content: {
        type: String as PropType<DividerProps["content"]>,
      },
      dashed: {
        default: (): DividerProps["dashed"] => false,
        type: Boolean as PropType<DividerProps["dashed"]>,
      },
      direction: {
        default: (): DividerProps["direction"] => "horizontal",
        type: String as PropType<DividerProps["direction"]>,
      },
    },
    setup(props, { slots }) {
      return () => (
        <div class={["l-divider", `l-divider-direction-${props.direction}`, {}]}>
          {props.content ?? slots.default?.()}
        </div>
      );
    },
  })
);
