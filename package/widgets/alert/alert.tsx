import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { AlertEmits, AlertProps } from "./types";

const emits: AlertEmits = {};

export const Alert = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-alert",
    props: {
      message: {
        type: String as PropType<AlertProps["message"]>,
      },
      theme: {
        default: (): AlertProps["theme"] => "success",
        type: String as PropType<AlertProps["theme"]>,
      },
    },
    setup(props, { slots }) {
      return () => <div class={["l-alert", `l-alert--theme-${props.theme}`, {}]}>{slots.default?.()}</div>;
    },
  })
);
