import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { getContent } from "../../utils/context";
import { IconEmits, IconProps } from "./types";

const emits: IconEmits = {};

export const Icon = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-icon",
    props: {
      color: {
        type: String as PropType<IconProps["color"]>,
      },
      size: {
        type: Number as PropType<IconProps["size"]>,
      },
      content: {
        type: [String, Object, Function] as PropType<IconProps["content"]>,
      },
    },
    setup(props, { slots }) {
      return () => {
        const content = getContent(props, slots, "content");
        return <i class={["l-icon"]}>{content}</i>;
      };
    },
  })
);
