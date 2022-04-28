import { LNode } from "../../common/linson-type";
import { createInjectionKey } from "../../utils/context";
import { DialogProps } from "./dialog-type";

export interface DialogProviderProps {}

export interface DialogProviderEmits {}

export interface DialogApiInjection {
  create(props: DialogProps): void;
  info(): void;
  success(): void;
  warning(): void;
  error(): void;
}

export const DIALOG_API_INJECTION_KEY = createInjectionKey<DialogApiInjection>("l-dialog-api");
