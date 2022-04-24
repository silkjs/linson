import { defineComponent, type PropType } from "vue";
import { withInstall } from "../../utils/common";
import { InputProps, InputEmits } from "./input-type";

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
