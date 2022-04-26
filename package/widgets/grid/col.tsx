import { type PropType, defineComponent, inject } from "vue";
import { withInstall } from "../../utils/common";
import { ColProps } from "./col-type";
import { RowProviderType } from "./row-type";

export const Col = withInstall(
  defineComponent({
    name: "l-col",
    props: {
      span: Number as PropType<ColProps["span"]>,
    },
    setup(props, { slots }) {
      const context = inject<RowProviderType>("RowContext", {});
      const gutter = context.gutter ?? 0;
      const gap = { h: 0, v: 0 };
      if (typeof gutter === "number") {
        gap.v = Math.floor(gutter / 2);
      } else {
        gap.v = Math.floor(gutter[0] / 2);
        gap.h = Math.floor(gutter[1] / 2);
      }

      return () => {
        return (
          <div
            class={["l-col", `l-col-${props.span}`]}
            style={{
              padding: `${gap.h}px ${gap.v}px`,
            }}
          >
            {slots.default?.()}
          </div>
        );
      };
    },
  })
);
