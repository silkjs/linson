import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { MessageEmits, MessageProps } from "./message-type";

const emits: MessageEmits = {};

export const Message = withInstall(
  defineComponent({
    name: "l-message",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-message", {}]}></div>;
    },
  })
);
