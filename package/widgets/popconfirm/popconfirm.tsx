import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { PopconfirmEmits, PopconfirmProps } from "./popconfirm-type";

const emits: PopconfirmEmits = {};

export const Popconfirm = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-popconfirm",
    props: {},
    setup() {
      return () => <div class={["l-popconfirm", {}]}></div>;
    },
  })
);
