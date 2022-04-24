import { defineComponent, type PropType, computed } from "vue";
import { withInstall } from "../../utils/common";
import { SpaceProps, SpaceEmits } from "./space-type";

const emits: SpaceEmits = {};

const GAP_MAP = {
  small: 8,
  middle: 16,
  large: 24,
};

export const Space = withInstall(
  defineComponent({
    name: "l-space",
    props: {
      size: {
        type: [String, Number] as PropType<SpaceProps["size"]>,
        default: (): SpaceProps["size"] => "middle",
      },
      direction: {
        type: String as PropType<SpaceProps["direction"]>,
        default: (): SpaceProps["direction"] => "horizontal",
      },
    },
    emits: { ...emits },
    setup(props, { slots }) {
      const gap = computed(() => {
        return typeof props.size === "number" ? props.size : GAP_MAP[props.size ?? "middle"];
      });

      return () => {
        return (
          <div
            class={["l-space", `l-space-direction-${props.direction}`]}
            style={{
              gap: `${gap.value}px`,
            }}
          >
            {slots.default?.()}
          </div>
        );
      };
    },
  })
);
