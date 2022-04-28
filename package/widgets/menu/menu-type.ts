import { LNode } from "../../common/linson-type";

export interface MenuProps {
  mode: "vertical" | "horizontal" | "inline";
  collapsed: boolean;
  theme: "light" | "dark";
}

export interface MenuEmits {}
