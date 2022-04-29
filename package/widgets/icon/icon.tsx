import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { IconEmits, IconProps } from "./icon-type";

const emits: IconEmits = {};

export const Icon = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-icon",
    props: {
      color: {
        type: String as PropType<IconProps["color"]>,
      },
      name: {
        type: String as PropType<IconProps["name"]>,
      },
      size: {
        type: Number as PropType<IconProps["size"]>,
      },
    },
    setup() {
      return () => <div class={["l-icon", {}]}></div>;
    },
  })
);
