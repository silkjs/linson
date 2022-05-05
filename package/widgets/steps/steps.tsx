import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { StepsEmits, StepsProps } from "./types";

const emits: StepsEmits = {};

export const Steps = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-steps",
    props: {
      current: {
        default: (): StepsProps["current"] => 1,
        type: Number as PropType<StepsProps["current"]>,
      },
      size: {
        default: (): StepsProps["size"] => "medium",
        type: String as PropType<StepsProps["size"]>,
      },
      vertical: {
        default: (): StepsProps["vertical"] => false,
        type: Boolean as PropType<StepsProps["vertical"]>,
      },
    },
    setup(props, { slots }) {
      return () => <div class={["l-steps", {}]}>{slots.default?.()}</div>;
    },
  })
);
