import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { FormEmits, FormProps } from "./form-type";

const emits: FormEmits = {};

export const Form = withInstall(
  defineComponent({
    name: "l-form",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-form", {}]}></div>;
    },
  })
);
