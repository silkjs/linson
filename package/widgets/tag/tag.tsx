import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { TagEmits, TagProps } from "./tag-type";

const emits: TagEmits = {};

export const Tag = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-tag",
    props: {
      round: {
        default: (): TagProps["round"] => false,
        type: Boolean as PropType<TagProps["round"]>,
      },
      size: {
        default: (): TagProps["size"] => "medium",
        type: String as PropType<TagProps["size"]>,
      },
      theme: {
        default: (): TagProps["theme"] => "default",
        type: String as PropType<TagProps["theme"]>,
      },
    },
    setup() {
      return () => <div class={["l-tag", {}]}></div>;
    },
  })
);
