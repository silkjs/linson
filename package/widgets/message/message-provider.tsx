import { type PropType, Teleport, Transition, defineComponent, inject, provide, reactive } from "vue";
import { nanoid } from "nanoid";
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
        create(value) {
          data.messages.push(value);
        },
        error(content) {
          data.messages.push({
            id: nanoid(),
            show: true,
            content: content,
            duration: 1000,
            theme: "error",
          });
        },
        info(content) {
          data.messages.push({
            id: nanoid(),
            show: true,
            content: content,
            duration: 1000,
            theme: "info",
          });
        },
        loading(content) {
          data.messages.push({
            id: nanoid(),
            show: true,
            content: content,
            duration: 1000,
            theme: "loading",
          });
        },
        success(content) {
          data.messages.push({
            id: nanoid(),
            show: true,
            content: content,
            duration: 1000,
            theme: "success",
          });
        },
        warning(content) {
          data.messages.push({
            id: nanoid(),
            show: true,
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
            <div class="l-message-provider">
              {data.messages.map((item) => (
                <Transition
                  key={item.id}
                  appear
                  name="bounce"
                  onAfterEnter={() => {
                    setTimeout(() => {
                      item.show = false;
                    }, 3000);
                  }}
                  onAfterLeave={() => {
                    setTimeout(() => {
                      data.messages = data.messages.filter(({ id }) => item.id !== id);
                    }, 0);
                  }}
                >
                  {item.show && <Message {...item} />}
                </Transition>
              ))}
            </div>
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
