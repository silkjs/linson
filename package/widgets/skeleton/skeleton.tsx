import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { SkeletonEmits, SkeletonProps } from "./skeleton-type";

const emits: SkeletonEmits = {};

export const Skeleton = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-skeleton",
    props: {},
    setup() {
      return () => <div class={["l-skeleton", {}]}></div>;
    },
  })
);
