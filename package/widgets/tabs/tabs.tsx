import { type PropType, defineComponent, reactive } from "vue";
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
      const data = reactive({
        active: props.value,
      });
      return () => {
        const children = slots.default?.();
        if (!data.active) {
          data.active = children?.at(0)?.props?.name;
        }
        return (
          <div class={["l-tabs", "l-tabs-position-top", {}]}>
            <div class="l-tabs-nav">
              {children?.map((item) => (
                <div
                  class={[
                    "l-tabs-tab",
                    {
                      "l-tabs-tab-active": data.active === item.props?.name,
                    },
                  ]}
                  onClick={() => {
                    data.active = item.props?.name;
                  }}
                >
                  {item.props?.tab}
                </div>
              ))}
              <span class="l-tabs-bar"></span>
            </div>
            <div class="l-tabs-content">
              {children?.map((item) => (
                <div
                  class={[
                    "l-tabs-pane",
                    {
                      "l-tabs-pane-active": data.active === item.props?.name,
                    },
                  ]}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        );
      };
    },
  })
);
