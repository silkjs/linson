import { LNode } from "../../common/linson-type";
import { createInjectionKey } from "../../utils/context";
import { MessageProps } from "./message-type";

export interface MessageProviderProps {}

export interface MessageProviderEmits {}

export interface MessageApiInjection {
  create(props: MessageProps): void;
  info(): void;
  success(): void;
  warning(): void;
  error(): void;
  loading(): void;
}

export const MESSAGE_API_INJECTION_KEY = createInjectionKey<MessageApiInjection>("l-message-api");
