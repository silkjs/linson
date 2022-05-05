import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { TabsEmits, TabsProps } from "./types";

const emits: TabsEmits = {
  "update:value": (value) => typeof value === "string",
};

export const Tabs = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-tabs",
    props: {
      placement: {
        default: (): TabsProps["placement"] => "top",
        type: String as PropType<TabsProps["placement"]>,
      },
      size: {
        default: (): TabsProps["size"] => "medium",
        type: String as PropType<TabsProps["size"]>,
      },
      value: {
        type: String as PropType<TabsProps["value"]>,
      },
    },
    setup(props, { slots, emit }) {
      return () => (
        <div class={["l-tabs", "l-tabs-position-top", {}]}>
          <div class="l-tabs-nav">
            <div class="l-tabs-tab l-tabs-tab-active">Oasis</div>
            <div class="l-tabs-tab">the Beatles</div>
            <div class="l-tabs-tab">周杰伦</div>
            <span class="l-tabs-bar"></span>
          </div>
          <div class="l-tabs-content">
            <div class="l-tabs-pane l-tabs-pane-active">Wonderwall</div>
            <div class="l-tabs-pane">Hey Jude</div>
            <div class="l-tabs-pane">七里香</div>
          </div>
        </div>
      );
    },
  })
);
