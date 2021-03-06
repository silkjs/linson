import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { PopconfirmEmits, PopconfirmProps } from "./types";

const emits: PopconfirmEmits = {};

export const Popconfirm = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-popconfirm",
    props: {
      placement: {
        default: (): PopconfirmProps["placement"] => "top",
        type: String as PropType<PopconfirmProps["placement"]>,
      },
      title: String as PropType<PopconfirmProps["title"]>,
      trigger: {
        default: (): PopconfirmProps["trigger"] => "hover",
        type: String as PropType<PopconfirmProps["trigger"]>,
      },
    },
    setup(props, { slots }) {
      return () => <div class={["l-popconfirm", {}]}>{slots.default?.()}</div>;
    },
  })
);
