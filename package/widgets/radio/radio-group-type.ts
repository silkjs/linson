import { LNode, LSize, LStatus } from "../../common/linson-type";

export interface RadioGroupProps {
  disabled?: boolean;
  placeholder?: string;
  readonly?: boolean;
  size?: LSize;
  status?: LStatus;
  value?: any;
}

export interface RadioGroupEmits {}
