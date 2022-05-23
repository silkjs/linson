import { type PropType, Teleport, defineComponent, inject, provide, reactive } from "vue";
import { withInstall } from "../../utils/common";
import { Message } from "./message";
import {
  MESSAGE_API_INJECTION_KEY,
  MessageApiInjection,
  MessageProps,
  MessageProviderEmits,
  MessageProviderProps,
} from "./types";

const emits: MessageProviderEmits = {};

export const MessageProvider = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-message-provider",
    props: {
      duration: {
        default: (): MessageProviderProps["duration"] => 1000,
        type: Number as PropType<MessageProviderProps["duration"]>,
      },
      max: {
        default: (): MessageProviderProps["max"] => 10,
        type: Number as PropType<MessageProviderProps["max"]>,
      },
      placement: {
        default: (): MessageProviderProps["placement"] => "top",
        type: String as PropType<MessageProviderProps["placement"]>,
      },
    },
    setup(props, { slots }) {
      const data = reactive<{ messages: MessageProps[] }>({
        messages: [],
      });
      const api: MessageApiInjection = {
        create() {
          //
        },
        error(content) {
          data.messages.push({
            content: content,
            duration: 1000,
            theme: "error",
          });
        },
        info() {
          //
        },
        loading() {
          //
        },
        success(content) {
          data.messages.push({
            content: content,
            duration: 1000,
            theme: "success",
          });
        },
        warning(content) {
          data.messages.push({
            content: content,
            duration: 1000,
            theme: "warning",
          });
        },
      };
      provide(MESSAGE_API_INJECTION_KEY, api);
      return () => (
        <>
          {slots.default?.()}
          <Teleport to="body">
            {data.messages.map((item) => (
              <Message {...item} />
            ))}
          </Teleport>
        </>
      );
    },
  })
);

export const useMessage = () => {
  const message = inject(MESSAGE_API_INJECTION_KEY);
  if (typeof message === "undefined") {
    throw new Error("No outer <l-message-provider /> founded.");
  }
  return message;
};
