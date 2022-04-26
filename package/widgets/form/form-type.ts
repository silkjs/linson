import { LNode } from "../../common/linson-type";
import { FormGroup } from "./common";

export interface FormProps {
  disabled?: boolean;
  group?: FormGroup;
  readonly?: boolean;
  size?: "small" | "medium" | "large";
}

export interface FormEmits {}
