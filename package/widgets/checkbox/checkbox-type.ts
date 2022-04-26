import { LNode, LSize } from "../../common/linson-type";

export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  size?: LSize;
  label?: string;
  value?: string | number;
  readonly?: boolean;
  name?: string;
}

export interface CheckboxEmits {
  change: (value: boolean) => void;
  "update:checked": (value: boolean) => void;
}
