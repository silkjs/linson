import { type VNode } from "vue";

export type LNode = () => VNode;

export type LSize = "small" | "medium" | "large";
export type LStatus = "success" | "warning" | "error";
export type LPlacement =
  | "top-start"
  | "top"
  | "top-end"
  | "right-start"
  | "right"
  | "right-end"
  | "bottom-start"
  | "bottom"
  | "bottom-end"
  | "left-start"
  | "left"
  | "left-end";
