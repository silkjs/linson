import { LNode, LSize } from "../../common/linson-type";

export interface StepsProps {
  current: number;
  size: LSize;
  vertical: boolean;
}

export interface StepsEmits {}

export interface StepItemProps {
  title: string;
  description: string;
  status: "process" | "finish" | "error" | "wait";
}

export interface StepItemEmits {}
