import { type PropType, computed, defineComponent, provide, reactive } from "vue";
import { withInstall } from "../../utils/common";
import { TABS_API_INJECTION_KEY, TabsApiInjection, TabsEmits, TabsProps } from "./types";

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
        left: 0,
      });
      const tabs_api_injection = reactive<TabsApiInjection>({
        active: props.value,
      });
      provide(TABS_API_INJECTION_KEY, tabs_api_injection);
      return () => {
        const children = slots.default?.();
        if (!tabs_api_injection.active) {
          tabs_api_injection.active = children?.at(0)?.props?.name;
        }
        return (
          <div class={["l-tabs", "l-tabs-position-top", {}]}>
            <div class="l-tabs-nav">
              {children?.map((item) => (
                <div
                  class={[
                    "l-tabs-tab",
                    {
                      "l-tabs-tab-active": tabs_api_injection.active === item.props?.name,
                    },
                  ]}
                  onClick={(e) => {
                    const info = e.target as HTMLElement;
                    data.left = info.offsetLeft;
                    tabs_api_injection.active = item.props?.name;
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
