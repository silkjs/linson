import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { CarouselEmits, CarouselProps } from "./carousel-type";

const emits: CarouselEmits = {};

export const Carousel = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-carousel",
    props: {},
    setup() {
      return () => <div class={["l-carousel", {}]}></div>;
    },
  })
);
