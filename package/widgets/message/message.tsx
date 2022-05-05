import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { MessageEmits, MessageProps } from "./types";

const emits: MessageEmits = {};

export const Message = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-message",
    props: {
      content: {
        type: [String, Function] as PropType<MessageProps["content"]>,
      },
      duration: {
        default: (): MessageProps["duration"] => 1000,
        type: Number as PropType<MessageProps["duration"]>,
      },
      theme: {
        default: (): MessageProps["theme"] => "info",
        type: String as PropType<MessageProps["theme"]>,
      },
    },
    setup() {
      return () => <div class={["l-message", {}]}></div>;
    },
  })
);
