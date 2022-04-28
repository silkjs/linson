import { type PropType, defineComponent, inject } from "vue";
import { withInstall } from "../../utils/common";
import { ColProps } from "./col-type";
import { ROW_INJECTION_KEY } from "./row-type";

export const Col = withInstall(
  defineComponent({
    name: "l-col",
    props: {
      span: {
        default: (): ColProps["span"] => 12,
        type: Number as PropType<ColProps["span"]>,
      },
    },
    setup(props, { slots }) {
      const { gutter } = inject(ROW_INJECTION_KEY, { gutter: 0 });
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
