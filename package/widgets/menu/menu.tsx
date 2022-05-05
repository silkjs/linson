import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { MenuEmits, MenuProps } from "./types";

const emits: MenuEmits = {};

export const Menu = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-menu",
    props: {
      collapsed: {
        default: (): MenuProps["collapsed"] => false,
        type: Boolean as PropType<MenuProps["collapsed"]>,
      },
      mode: {
        default: (): MenuProps["mode"] => "vertical",
        type: String as PropType<MenuProps["mode"]>,
      },
      theme: {
        default: (): MenuProps["theme"] => "light",
        type: String as PropType<MenuProps["theme"]>,
      },
    },
    setup() {
      return () => <div class={["l-menu", {}]}></div>;
    },
  })
);
