import { type PropType, defineComponent, inject, provide } from "vue";
import { withInstall } from "../../utils/common";
import {
  MESSAGE_API_INJECTION_KEY,
  MessageApiInjection,
  MessageProviderEmits,
  MessageProviderProps,
} from "./message-provider-type";

const emits: MessageProviderEmits = {};

export const MessageProvider = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-message-provider",
    props: {},
    setup() {
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
      return () => <div class={["l-message-provider", {}]}></div>;
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
