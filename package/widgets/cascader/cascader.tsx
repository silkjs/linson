import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { CascaderEmits, CascaderProps } from "./cascader-type";

const emits: CascaderEmits = {};

export const Cascader = withInstall(
  defineComponent({
    name: "l-cascader",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-cascader", {}]}></div>;
    },
  })
);
