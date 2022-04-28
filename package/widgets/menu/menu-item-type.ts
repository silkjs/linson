import { LNode } from "../../common/linson-type";

export interface MenuItemProps {
  icon: string | LNode;
  disabled: boolean;
  title: string;
}

export interface MenuItemEmits {}
