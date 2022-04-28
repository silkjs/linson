import { LNode } from "../../common/linson-type";

export interface StepItemProps {
  title: string;
  description: string;
  status: "process" | "finish" | "error" | "wait";
}

export interface StepItemEmits {}
