import { LNode } from "../../common/linson-type";

export interface CheckboxProps {
  checked?: boolean;
  label?: string;
  value?: string | number;
  readonly?: boolean;
  name?: string;
  disabled?: boolean;
}

export interface CheckboxEmits {
  "update:checked": (value: boolean) => void;
  change: (value: boolean) => void;
}
