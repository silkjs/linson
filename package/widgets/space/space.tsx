import { type PropType, computed, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { SpaceEmits, SpaceProps } from "./space-type";

const emits: SpaceEmits = {};

const GAP_MAP = {
  large: 24,
  middle: 16,
  small: 8,
};

export const Space = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-space",
    props: {
      direction: {
        default: (): SpaceProps["direction"] => "horizontal",
        type: String as PropType<SpaceProps["direction"]>,
      },
      size: {
        default: (): SpaceProps["size"] => "middle",
        type: [String, Number] as PropType<SpaceProps["size"]>,
      },
    },
    setup(props, { slots }) {
      const gap = computed(() => {
        return typeof props.size === "number" ? props.size : GAP_MAP[props.size];
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
