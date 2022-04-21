import { defineComponent, getCurrentInstance, type PropType } from "vue";
import { ColProps } from "./col-type";
import { RowProps } from "./row-type";

export const Col = defineComponent({
  name: "l-col",
  props: {
    span: {
      type: Number as PropType<ColProps["span"]>,
      default: (): ColProps["span"] => 12,
    },
  },
  setup(props, { slots }) {
    const gutter = (getCurrentInstance()?.parent?.props as RowProps).gutter ?? 0;
    const gap = { h: 0, v: 0 };
    if (typeof gutter === "number") {
      gap.v = Math.floor(gutter / 2);
    } else {
      gap.v = Math.floor(gutter[0] / 2);
      gap.h = Math.floor(gutter[1] / 2);
    }

    return () => (
      <div
        class={["l-col", `l-col-${props.span}`]}
        style={{
          padding: `${gap.h}px ${gap.v}px`,
        }}
      >
        {slots.default?.()}
      </div>
    );
  },
});