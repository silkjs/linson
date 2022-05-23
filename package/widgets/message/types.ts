import { LNode, LPlacement } from "../../common/linson-type";
import { createInjectionKey } from "../../utils/context";

export interface MessageProviderProps {
  duration: number;
  max: number;
  placement: LPlacement;
}

export interface MessageProviderEmits {}

export interface MessageApiInjection {
  create(props: MessageProps): void;
  info(content: LNode): void;
  success(content: LNode): void;
  warning(content: LNode): void;
  error(content: LNode): void;
  loading(content: LNode): void;
}

export const MESSAGE_API_INJECTION_KEY = createInjectionKey<MessageApiInjection>("l-message-api");

export interface MessageProps {
  content: LNode;
  duration: number;
  theme: "info" | "success" | "warning" | "error" | "loading";
}

export interface MessageEmits {}
