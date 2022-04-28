import { LNode } from "../../common/linson-type";

export interface MessageProps {
  content?: string | LNode;
  duration?: number;
  theme?: "info" | "success" | "warning" | "error" | "loading";
}

export interface MessageEmits {}
