import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { MenuItemEmits, MenuItemProps } from "./types";

const emits: MenuItemEmits = {};

export const MenuItem = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-menu-item",
    props: {
      disabled: {
        default: (): MenuItemProps["disabled"] => false,
        type: Boolean as PropType<MenuItemProps["disabled"]>,
      },
      icon: {
        type: String as PropType<MenuItemProps["icon"]>,
      },
      title: {
        type: String as PropType<MenuItemProps["title"]>,
      },
    },
    setup(props, { slots }) {
      return () => <div class={["l-menu-item", {}]}>{slots.default?.()}</div>;
    },
  })
);
