import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { MessageEmits, MessageProps } from "./message-type";

const emits: MessageEmits = {};

export const Message = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-message",
    props: {},
    setup() {
      return () => <div class={["l-message", {}]}></div>;
    },
  })
);
