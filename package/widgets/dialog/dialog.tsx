import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { DialogEmits, DialogProps } from "./dialog-type";

const emits: DialogEmits = {};

export const Dialog = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-dialog",
    props: {
      content: [String, Function] as PropType<DialogProps["content"]>,
      title: [String, Function] as PropType<DialogProps["title"]>,
    },
    setup() {
      return () => <div class={["l-dialog", {}]}></div>;
    },
  })
);
