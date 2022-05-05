import { LNode } from "../../common/linson-type";

export interface BreadcrumbProps {
  options: BreadcrumbItemProps[];
  separator: string | LNode;
}

export interface BreadcrumbEmits {}

export interface BreadcrumbItemProps {
  disabled: boolean;
  content: string | LNode;
}

export interface BreadcrumbItemEmits {}
