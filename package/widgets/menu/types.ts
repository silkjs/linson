import { LNode } from "../../common/linson-type";

export interface MenuProps {
  mode: "vertical" | "horizontal" | "inline";
  collapsed: boolean;
  theme: "light" | "dark";
}

export interface MenuEmits {}

export interface MenuSubProps {
  icon: string | LNode;
  disabled: boolean;
  title: string;
}

export interface MenuSubEmits {}

export interface MenuItemProps {
  icon: string | LNode;
  disabled: boolean;
  title: string;
}

export interface MenuItemEmits {}
