import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { MenuSubEmits, MenuSubProps } from "./types";

const emits: MenuSubEmits = {};

export const MenuSub = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-menu-sub",
    props: {
      disabled: {
        default: (): MenuSubProps["disabled"] => false,
        type: Boolean as PropType<MenuSubProps["disabled"]>,
      },
      icon: {
        type: String as PropType<MenuSubProps["icon"]>,
      },
      title: {
        type: String as PropType<MenuSubProps["title"]>,
      },
    },
    setup(props, { slots }) {
      return () => <div class={["l-menu-sub", {}]}>{slots.default?.()}</div>;
    },
  })
);
