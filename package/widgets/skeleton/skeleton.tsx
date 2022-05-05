import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { SkeletonEmits, SkeletonProps } from "./types";

const emits: SkeletonEmits = {};

export const Skeleton = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-skeleton",
    props: {
      animated: {
        default: (): SkeletonProps["animated"] => false,
        type: Boolean as PropType<SkeletonProps["animated"]>,
      },
      repeat: {
        default: (): SkeletonProps["repeat"] => 1,
        type: Number as PropType<SkeletonProps["repeat"]>,
      },
      round: {
        default: (): SkeletonProps["round"] => false,
        type: Boolean as PropType<SkeletonProps["round"]>,
      },
      text: {
        default: (): SkeletonProps["text"] => false,
        type: Boolean as PropType<SkeletonProps["text"]>,
      },
    },
    setup(props, { slots }) {
      return () => (
        <div class={["l-skeleton", {}]}>
          {new Array(props.repeat).fill(1).map(() => (
            <div class="l-skeleton_row">
              <div class="l-skeleton_col l-skeleton--type-text"></div>
            </div>
          ))}
        </div>
      );
    },
  })
);
