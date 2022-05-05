import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { StepItemEmits, StepItemProps } from "./types";

const emits: StepItemEmits = {};

export const StepItem = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-step-item",
    props: {
      description: String as PropType<StepItemProps["description"]>,
      status: String as PropType<StepItemProps["status"]>,
      title: String as PropType<StepItemProps["title"]>,
    },
    setup() {
      return () => <div class={["l-step-item", {}]}></div>;
    },
  })
);
