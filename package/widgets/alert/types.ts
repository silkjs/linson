import { LNode } from "../../common/linson-type";

export interface AlertProps {
  theme: "info" | "success" | "warning" | "error";
  message: string | LNode;
}

export interface AlertEmits {}
