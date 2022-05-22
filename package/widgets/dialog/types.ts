import { LNode } from "../../common/linson-type";
import { createInjectionKey } from "../../utils/context";

export interface DialogProviderProps {
  to: string | HTMLElement;
}

export interface DialogProviderEmits {}

export interface DialogApiInjection {
  create(props: DialogProps): void;
  info(): void;
  success(props: DialogProps): void;
  warning(): void;
  error(): void;
}

export interface DialogProps {
  title: string | LNode;
  content: string | LNode;
}

export interface DialogEmits {}

export const DIALOG_API_INJECTION_KEY = createInjectionKey<DialogApiInjection>("l-dialog-api");
