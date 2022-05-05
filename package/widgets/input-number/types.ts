import { LNode, LSize, LStatus } from "../../common/linson-type";

export interface InputNumberProps {
  disabled?: boolean;
  placeholder?: string;
  readonly?: boolean;
  size?: LSize;
  status?: LStatus;
  value?: number;
}

export interface InputNumberEmits {}
