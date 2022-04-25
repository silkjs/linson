import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { RadioGroupEmits, RadioGroupProps } from "./radio-group-type";

const emits: RadioGroupEmits = {};

export const RadioGroup = withInstall(
  defineComponent({
    name: "l-radio-group",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-radio-group", {}]}></div>;
    },
  })
);
