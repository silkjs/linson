import { LSize, LStatus } from "../../common/linson-type";

export interface SwitchProps {
  disabled: boolean;
  readonly: boolean;
  size: LSize;
  status: LStatus;
  checked: boolean;
}

export interface SwitchEmits {
  "update:checked": (value: boolean) => void;
}
