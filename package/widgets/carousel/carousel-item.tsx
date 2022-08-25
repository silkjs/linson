import { defineComponent, inject } from "vue";
import { CAROUSEL_INJECTION_KEY } from "./types";

export const CarouselItem = defineComponent({
  setup(props, { slots }) {
    const carousel = inject(CAROUSEL_INJECTION_KEY);
    if (typeof carousel === "undefined") {
      throw new Error("No outer <l-carousel /> founded.");
    }
    return () => (
      <div
        class={[
          "l-carousel-content_item",
          {
            active: true,
          },
        ]}
      >
        {slots.default?.()}
      </div>
    );
  },
});
