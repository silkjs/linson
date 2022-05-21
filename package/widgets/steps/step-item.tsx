import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { getContent } from "../../utils/context";
import { StepItemEmits, StepItemProps } from "./types";

const emits: StepItemEmits = {};

export const StepItem = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-step-item",
    props: {
      description: {
        type: String as PropType<StepItemProps["description"]>,
      },
      status: {
        default: (): StepItemProps["status"] => "wait",
        type: String as PropType<StepItemProps["status"]>,
      },
      title: {
        type: String as PropType<StepItemProps["title"]>,
      },
    },
    setup(props, { slots }) {
      return () => {
        const title = getContent(props, slots, "title", "title");
        const description = getContent(props, slots, "description", "description");
        return (
          <div class={["l-step-item", {}]}>
            <div class="l-step-item_icon"></div>
            <div class="l-step-item_content">
              <div class="l-step-item_title">{title}</div>
              <div class="l-step-item_description">{description}</div>
            </div>
          </div>
        );
      };
    },
  })
);
