import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { DialogEmits, DialogProps } from "./dialog-type";

const emits: DialogEmits = {};

export const Dialog = withInstall(
  defineComponent({
    name: "l-dialog",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-dialog", {}]}></div>;
    },
  })
);
