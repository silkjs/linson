import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { getContent } from "../../utils/context";
import { CardEmits, CardProps } from "./types";

const emits: CardEmits = {};

export const Card = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-card",
    props: {
      content: {
        type: [String, Function] as PropType<CardProps["content"]>,
      },
      title: {
        type: [String, Function] as PropType<CardProps["title"]>,
      },
    },
    setup(props, { slots }) {
      return () => {
        const title = getContent(props, slots, "title", "title");
        const content = getContent(props, slots, "content");

        return (
          <div class={["l-card", {}]}>
            <div class="l-card-head">{title}</div>
            <div class="l-card-content">{content}</div>
          </div>
        );
      };
    },
  })
);
