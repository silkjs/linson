import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { StepsEmits, StepsProps } from "./steps-type";

const emits: StepsEmits = {};

export const Steps = withInstall(
  defineComponent({
    name: "l-steps",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-steps", {}]}></div>;
    },
  })
);
