import { defineComponent } from "vue";

export const CarouselItem = defineComponent({
  setup(props, { slots }) {
    return () => <div class={["l-carousel-content_item"]}>{slots.default?.()}</div>;
  },
});
