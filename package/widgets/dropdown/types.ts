import { LNode, LPlacement, LTrigger } from "../../common/linson-type";

export interface DropdownProps {
  content: string | LNode;
  placement: LPlacement;
  trigger: LTrigger;
}

export interface DropdownEmits {}
