import { defineComponent, type PropType } from "vue";
import { SpaceProps, SpaceEmits } from "./space-type";

const emits: SpaceEmits = {};

export const Space = defineComponent({
  name: "l-space",
  props: {},
  emits: { ...emits },
  setup() {
    return () => <div class={["l-space", {}]}></div>;
  },
});
