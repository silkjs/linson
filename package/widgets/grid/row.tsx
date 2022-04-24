import { defineComponent, type PropType } from "vue";
import { withInstall } from "../../utils/common";
import { RowProps } from "./row-type";

export const Row = withInstall(
  defineComponent({
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
  })
);
