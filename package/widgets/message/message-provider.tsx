import { type PropType, defineComponent, inject, provide } from "vue";
import { withInstall } from "../../utils/common";
import { MESSAGE_API_INJECTION_KEY, MessageApiInjection, MessageProviderEmits, MessageProviderProps } from "./types";

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
      to: {
        type: [String, Object] as PropType<MessageProviderProps["to"]>,
      },
    },
    setup(props, { slots }) {
      const api: MessageApiInjection = {
        create() {
          //
        },
        error() {
          //
        },
        info() {
          //
        },
        loading() {
          //
        },
        success() {
          //
        },
        warning() {
          //
        },
      };
      provide(MESSAGE_API_INJECTION_KEY, api);
      return () => slots.default?.();
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
