import { LNode } from "../../common/linson-type";
import { BreadcrumbItemProps } from "./breadcrumb-item-type";

export interface BreadcrumbProps {
  options: BreadcrumbItemProps[];
  separator: string | LNode;
}

export interface BreadcrumbEmits {}
