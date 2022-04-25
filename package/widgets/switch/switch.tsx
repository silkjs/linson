import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { SwitchEmits, SwitchProps } from "./switch-type";

const emits: SwitchEmits = {};

export const Switch = withInstall(
  defineComponent({
    name: "l-switch",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-switch", {}]}></div>;
    },
  })
);
