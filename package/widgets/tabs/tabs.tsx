import { type PropType, defineComponent, provide, reactive } from "vue";
import { withInstall } from "../../utils/common";
import { TABS_API_INJECTION_KEY, TabsEmits, TabsProps } from "./types";

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
        left: 0,
      });
      provide(TABS_API_INJECTION_KEY, {
        active: data.active,
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
                  onClick={(e) => {
                    const info = e.target as HTMLElement;
                    data.left = info.offsetLeft;
                    data.active = item.props?.name;
                  }}
                >
                  {item.props?.tab}
                </div>
              ))}
              <span
                class="l-tabs-bar"
                style={{
                  left: `${data.left}px`,
                }}
              ></span>
            </div>
            <div class="l-tabs-content">{children}</div>
          </div>
        );
      };
    },
  })
);
