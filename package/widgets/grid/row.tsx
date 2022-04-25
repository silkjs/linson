import { type PropType, defineComponent, provide } from "vue";
import { withInstall } from "../../utils/common";
import { RowProps, RowProviderType } from "./row-type";

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
      provide<RowProviderType>("RowContext", {
        gutter: props.gutter,
      });
      return () => <div class={["l-row", {}]}>{slots.default?.()}</div>;
    },
  })
);
