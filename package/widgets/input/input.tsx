import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { InputEmits, InputProps } from "./input-type";

const emits: InputEmits = {};

export const Input = withInstall(
  defineComponent({
    name: "l-input",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-input", {}]}></div>;
    },
  })
);
