import { LNode } from "../../common/linson-type";

export interface DividerProps {
  align: "left" | "right" | "center";
  content: string | LNode;
  dashed: boolean;
  direction: "vertical" | "horizontal";
}

export interface DividerEmits {}
