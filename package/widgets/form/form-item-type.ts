import { LNode, LSize } from "../../common/linson-type";
import { Rule, ValidatorFn } from "../../utils/form";

export interface FormItemProps<T = any> {
  rules?: ValidatorFn<T>[] | Rule<T>[];
  lable?: string;
  size?: LSize;
}

export interface FormItemEmits {}
