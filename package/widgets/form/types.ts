import { LNode, LSize } from "../../common/linson-type";
import { Rule, ValidatorFn } from "../../utils/form";

export interface FormProps {
  disabled?: boolean;
  readonly?: boolean;
  size?: "small" | "medium" | "large";
}

export interface FormEmits {}

export interface FormItemProps<T = any> {
  rules?: ValidatorFn<T>[] | Rule<T>[];
  lable?: string;
  size?: LSize;
}

export interface FormItemEmits {}
