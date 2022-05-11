import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { getContent } from "../../utils/context";
import { DropdownEmits, DropdownProps } from "./types";

const emits: DropdownEmits = {};

export const Dropdown = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-dropdown",
    props: {
      content: {
        type: [String, Object, Function] as PropType<DropdownProps["content"]>,
      },
      options: {
        type: [String, Object, Function] as PropType<DropdownProps["options"]>,
      },
      placement: {
        default: (): DropdownProps["placement"] => "bottom",
        type: String as PropType<DropdownProps["placement"]>,
      },
      trigger: {
        default: (): DropdownProps["trigger"] => "hover",
        type: String as PropType<DropdownProps["trigger"]>,
      },
    },
    setup(props, { slots }) {
      return () => {
        const options = getContent(props, slots, "options", "options");
        const content = getContent(props, slots, "content");

        return (
          <div class={["l-dropdown", {}]}>
            {content}
            <div class="l-dropdown-options">{options}</div>
          </div>
        );
      };
    },
  })
);
