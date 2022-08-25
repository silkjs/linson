import { type PropType, defineComponent, provide, reactive } from "vue";
import { withInstall } from "../../utils/common";
import { CAROUSEL_INJECTION_KEY, CarouselEmits, CarouselInjection, CarouselProps } from "./types";

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
      const carousel_injection = reactive<CarouselInjection>({
        index: 0,
      });
      provide(CAROUSEL_INJECTION_KEY, carousel_injection);
      return () => {
        const children = slots.default?.();
        return (
          <div class={["l-carousel", {}]}>
            <div class="l-carousel-content">{slots.default?.()}</div>
            <div class="l-carousel-navigation">
              {children?.map((item, index) => (
                <div
                  class={[
                    "l-carousel-navigation_item",
                    {
                      active: carousel_injection.index === index,
                    },
                  ]}
                  onClick={() => {
                    carousel_injection.index = index;
                  }}
                ></div>
              ))}
            </div>
          </div>
        );
      };
    },
  })
);
