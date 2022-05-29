import { LNode, LPlacement, LTrigger } from "../../common/linson-type";

export interface PopoverProps {
  title: LNode;
  content: LNode;
  placement: LPlacement;
  trigger: LTrigger;
}

export interface PopoverEmits {}
