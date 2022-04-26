import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { TagEmits, TagProps } from "./tag-type";

const emits: TagEmits = {};

export const Tag = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-tag",
    props: {},
    setup() {
      return () => <div class={["l-tag", {}]}></div>;
    },
  })
);
