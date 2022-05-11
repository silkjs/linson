import { LNode, LSize, LStatus } from "../../common/linson-type";

export interface CheckboxGroupProps {
  disabled?: boolean;
  options?: Array<string | { lable: string; value: string }>;
  readonly?: boolean;
  size?: LSize;
  status?: LStatus;
  value?: Array<string | number>;
}

export interface CheckboxGroupEmits {
  change: (value: boolean) => void;
  "update:value": (value: boolean) => void;
}

export interface CheckboxProps {
  checked: boolean;
  disabled: boolean;
  size: LSize;
  label: LNode;
  value: string | number;
  readonly: boolean;
  name: string;
}

export interface CheckboxEmits {
  change: (value: boolean) => void;
  "update:checked": (value: boolean) => void;
}
