import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { MenuEmits, MenuProps } from "./menu-type";

const emits: MenuEmits = {};

export const Menu = withInstall(
  defineComponent({
    name: "l-menu",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-menu", {}]}></div>;
    },
  })
);
