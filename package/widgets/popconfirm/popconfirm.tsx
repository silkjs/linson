import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { PopconfirmEmits, PopconfirmProps } from "./popconfirm-type";

const emits: PopconfirmEmits = {};

export const Popconfirm = withInstall(
  defineComponent({
    name: "l-popconfirm",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-popconfirm", {}]}></div>;
    },
  })
);
