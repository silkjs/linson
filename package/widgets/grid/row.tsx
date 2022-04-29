import { type PropType, defineComponent, provide } from "vue";
import { withInstall } from "../../utils/common";
import { ROW_INJECTION_KEY, RowProps } from "./row-type";

export const Row = withInstall(
  defineComponent({
    name: "l-row",
    props: {
      gutter: {
        default: (): RowProps["gutter"] => 0,
        type: [Number, Array] as PropType<RowProps["gutter"]>,
      },
    },
    setup(props, { slots }) {
      provide(ROW_INJECTION_KEY, {
        gutter: props.gutter,
      });
      return () => <div class={["l-row", {}]}>{slots.default?.()}</div>;
    },
  })
);
