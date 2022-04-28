import { LNode } from "../../common/linson-type";

export interface TabPaneProps {
  name: string | number;
  tab: string | LNode;
}

export interface TabPaneEmits {}
