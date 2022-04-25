import { LNode } from "../../common/linson-type";

export interface CheckboxGroupProps {
  value?: Array<string | number>;
  name?: string;
  options?: Array<string | { lable: string; value: string }>;
  disabled?: boolean;
}

export interface CheckboxGroupEmits {
  "update:value": (value: boolean) => void;
  change: (value: boolean) => void;
}
