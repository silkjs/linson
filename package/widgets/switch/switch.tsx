import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { SwitchEmits, SwitchProps } from "./switch-type";

const emits: SwitchEmits = {};

export const Switch = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-switch",
    props: {
      disabled: Boolean as PropType<SwitchProps["disabled"]>,
      placeholder: String as PropType<SwitchProps["placeholder"]>,
      readonly: Boolean as PropType<SwitchProps["readonly"]>,
      size: String as PropType<SwitchProps["size"]>,
      status: String as PropType<SwitchProps["status"]>,
      value: String as PropType<SwitchProps["value"]>,
    },
    setup() {
      return () => <div class={["l-switch", {}]}></div>;
    },
  })
);
