import { LNode, LPlacement } from "../../common/linson-type";
import { createInjectionKey } from "../../utils/context";
import { MessageProps } from "./message-type";

export interface MessageProviderProps {
  duration: number;
  max: number;
  placement: LPlacement;
  to: string | HTMLElement;
}

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
