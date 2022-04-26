import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { AlertEmits, AlertProps } from "./alert-type";

const emits: AlertEmits = {};

export const Alert = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-alert",
    props: {},
    setup() {
      return () => <div class={["l-alert", {}]}></div>;
    },
  })
);
