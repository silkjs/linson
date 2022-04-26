import { type PropType, defineComponent, provide } from "vue";
import { withInstall } from "../../utils/common";
import { RowProps, RowProviderType } from "./row-type";

export const Row = withInstall(
  defineComponent({
    name: "l-row",
    props: {
      gutter: [Number, Array] as PropType<RowProps["gutter"]>,
    },
    setup(props, { slots }) {
      provide<RowProviderType>("RowContext", {
        gutter: props.gutter,
      });
      return () => <div class={["l-row", {}]}>{slots.default?.()}</div>;
    },
  })
);
