import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { BreadcrumbItemEmits, BreadcrumbItemProps } from "./types";

const emits: BreadcrumbItemEmits = {};

export const BreadcrumbItem = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-breadcrumb-item",
    props: {
      content: {
        type: [String, Function] as PropType<BreadcrumbItemProps["content"]>,
      },
      disabled: {
        default: (): BreadcrumbItemProps["disabled"] => false,
        type: Boolean as PropType<BreadcrumbItemProps["disabled"]>,
      },
    },
    setup(props, { slots }) {
      return () => (
        <div class={["l-breadcrumb-item", {}]}>
          <a class="l-breadcrumb--text-overflow">{slots.default?.()}</a>
          <span class="l-breadcrumb_separator">-</span>
        </div>
      );
    },
  })
);
