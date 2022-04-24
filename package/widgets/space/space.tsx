import { defineComponent, type PropType } from "vue";
import { withInstall } from "../../utils/common";
import { SpaceProps, SpaceEmits } from "./space-type";

const emits: SpaceEmits = {};

export const Space = withInstall(
  defineComponent({
    name: "l-space",
    props: {},
    emits: { ...emits },
    setup() {
      return () => {
        return <div class={["l-space", {}]}></div>;
      };
    },
  })
);
