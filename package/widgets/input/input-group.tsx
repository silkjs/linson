import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { InputGroupEmits, InputGroupProps } from "./input-group-type";

const emits: InputGroupEmits = {};

export const InputGroup = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-input-group",
    props: {
      separate: Boolean as PropType<InputGroupProps["separate"]>,
      size: String as PropType<InputGroupProps["size"]>,
    },
    setup() {
      return () => <div class={["l-input-group", {}]}></div>;
    },
  })
);
