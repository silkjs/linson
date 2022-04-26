import { LNode, LSize, LStatus } from "../../common/linson-type";

export interface InputProps {
  autocomplete?: string;
  clearable?: boolean;
  disabled?: boolean;
  maxlength?: number;
  minlength?: number;
  placeholder?: string;
  readonly?: boolean;
  size?: LSize;
  prefix?: string | LNode;
  suffix?: string | LNode;
  prepend?: string | LNode;
  append?: string | LNode;
  status?: LStatus;
  type?: "text" | "password";
  value?: string;
}

export interface InputEmits {
  "update:value": (value: string) => void;
  input: (value: string) => void;
  change: (value: string) => void;
  blur: () => void;
}
