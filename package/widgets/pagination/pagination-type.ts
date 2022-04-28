import { LNode } from "../../common/linson-type";

export interface PaginationProps {
  total: number;
  page: number;
  size: number;
  options: number[];
  showPicker: boolean;
  showJumper: boolean;
}

export interface PaginationEmits {
  change: (type: "page" | "size", value: number) => void;
}
