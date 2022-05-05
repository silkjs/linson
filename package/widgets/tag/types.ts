import { LNode, LSize } from "../../common/linson-type";

export interface TagProps {
  size: LSize;
  theme: "default" | "primary" | "info" | "success" | "warning" | "error";
  round: boolean;
}

export interface TagEmits {}
