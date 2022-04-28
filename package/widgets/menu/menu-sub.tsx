import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { MenuSubEmits, MenuSubProps } from "./menu-sub-type";

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
    setup() {
      return () => <div class={["l-menu-sub", {}]}></div>;
    },
  })
);
