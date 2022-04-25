import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { RadioEmits, RadioProps } from "./radio-type";

const emits: RadioEmits = {};

export const Radio = withInstall(
  defineComponent({
    name: "l-radio",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-radio", {}]}></div>;
    },
  })
);
