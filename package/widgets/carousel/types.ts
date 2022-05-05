import { LNode } from "../../common/linson-type";

export interface CarouselProps {
  autoplay: boolean;
  direction: "horizontal" | "vertical";
  dotPlacement: "top" | "bottom" | "left" | "right";
  dotType: "dot" | "line";
  effect: "slide" | "fade" | "card" | "custom";
  interval: number;
  loop: boolean;
}

export interface CarouselEmits {}
