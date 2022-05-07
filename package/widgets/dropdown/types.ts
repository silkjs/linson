import { LNode, LPlacement, LTrigger } from "../../common/linson-type";

export interface DropdownProps {
  options: LNode;
  content: LNode;
  placement: LPlacement;
  trigger: LTrigger;
}

export interface DropdownEmits {}
