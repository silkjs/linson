import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { CarouselEmits, CarouselProps } from "./types";

const emits: CarouselEmits = {};

export const Carousel = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-carousel",
    props: {
      autoplay: {
        default: (): CarouselProps["autoplay"] => false,
        type: Boolean as PropType<CarouselProps["autoplay"]>,
      },
      direction: {
        default: (): CarouselProps["direction"] => "horizontal",
        type: String as PropType<CarouselProps["direction"]>,
      },
      dotPlacement: {
        default: (): CarouselProps["dotPlacement"] => "bottom",
        type: String as PropType<CarouselProps["dotPlacement"]>,
      },
      dotType: {
        default: (): CarouselProps["dotType"] => "dot",
        type: String as PropType<CarouselProps["dotType"]>,
      },
      effect: {
        default: (): CarouselProps["effect"] => "fade",
        type: String as PropType<CarouselProps["effect"]>,
      },
      interval: {
        default: (): CarouselProps["interval"] => 1000,
        type: Number as PropType<CarouselProps["interval"]>,
      },
      loop: {
        default: (): CarouselProps["loop"] => true,
        type: Boolean as PropType<CarouselProps["loop"]>,
      },
    },
    setup(props, { slots }) {
      return () => (
        <div class={["l-carousel", {}]}>
          <div class="l-carousel-content">{slots.default?.()}</div>
          <div class="l-carousel-navigation">
            <div class="l-carousel-navigation_item active"></div>
            <div class="l-carousel-navigation_item"></div>
            <div class="l-carousel-navigation_item"></div>
            <div class="l-carousel-navigation_item"></div>
          </div>
        </div>
      );
    },
  })
);
