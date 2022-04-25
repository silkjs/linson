import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { IconEmits, IconProps } from "./icon-type";

const emits: IconEmits = {};

export const Icon = withInstall(
  defineComponent({
    name: "l-icon",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-icon", {}]}></div>;
    },
  })
);
