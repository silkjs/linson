import { LNode } from "../../common/linson-type";
import { createInjectionKey } from "../../utils/context";

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

export interface CarouselInjection {
  index: number;
}

export const CAROUSEL_INJECTION_KEY = createInjectionKey<CarouselInjection>("l-carousel");
