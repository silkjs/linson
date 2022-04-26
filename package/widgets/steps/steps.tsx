import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { StepsEmits, StepsProps } from "./steps-type";

const emits: StepsEmits = {};

export const Steps = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-steps",
    props: {},
    setup() {
      return () => <div class={["l-steps", {}]}></div>;
    },
  })
);
