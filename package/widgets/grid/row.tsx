import { defineComponent, type PropType } from "vue";
import { RowProps } from "./row-type";

export const Row = defineComponent({
  name: "l-row",
  props: {
    gutter: {
      type: [Number, Array] as PropType<RowProps["gutter"]>,
      default: (): RowProps["gutter"] => 0,
    },
  },
  setup(props, { slots }) {
    return () => <div class={["l-row", {}]}>{slots.default?.()}</div>;
  },
});
