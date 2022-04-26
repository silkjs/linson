import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { DividerEmits, DividerProps } from "./divider-type";

const emits: DividerEmits = {};

export const Divider = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-divider",
    props: {},
    setup() {
      return () => <div class={["l-divider", {}]}></div>;
    },
  })
);
