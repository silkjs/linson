import { LNode } from "../../common/linson-type";

export type ContextOption = OptionContext | OptionCheckbox | OptionRadio | OptionLabel | OptionSeparator;

export interface OptionContext {
  content: LNode;
  suffix?: LNode;
  disabled?: boolean;
  children?: ContextOption[];
}
export interface OptionCheckbox {
  checkbox: Array<{ content: LNode; suffix?: LNode; checked?: boolean }>;
}
export interface OptionRadio {
  radio: Array<{ content: LNode; suffix?: LNode; checked?: boolean }>;
}
export interface OptionLabel {
  label: LNode;
}
export interface OptionSeparator {
  separator: true;
}

export interface ContextMenuProps {
  options: ContextOption[];
}
export interface ContextMenuEmits {}
