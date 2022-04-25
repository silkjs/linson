import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { SkeletonEmits, SkeletonProps } from "./skeleton-type";

const emits: SkeletonEmits = {};

export const Skeleton = withInstall(
  defineComponent({
    name: "l-skeleton",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-skeleton", {}]}></div>;
    },
  })
);
