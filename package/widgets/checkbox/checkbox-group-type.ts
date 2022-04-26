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
