import { LNode, LSize } from "../../common/linson-type";

export interface TabsProps {
  value: string;
  size: LSize;
  placement: "left" | "top" | "bottom" | "right";
}

export interface TabsEmits {
  "update:value": (value: string) => void;
}

export interface TabPaneProps {
  name: string;
  tab: LNode;
}

export interface TabPaneEmits {}
