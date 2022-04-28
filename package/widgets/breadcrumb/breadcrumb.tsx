import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { BreadcrumbEmits, BreadcrumbProps } from "./breadcrumb-type";

const emits: BreadcrumbEmits = {};

export const Breadcrumb = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-breadcrumb",
    props: {
      options: {
        default: (): BreadcrumbProps["options"] => [],
        type: Array as PropType<BreadcrumbProps["options"]>,
      },
      separator: {
        default: (): BreadcrumbProps["separator"] => "/",
        type: [String, Function] as PropType<BreadcrumbProps["separator"]>,
      },
    },
    setup() {
      return () => <div class={["l-breadcrumb", {}]}></div>;
    },
  })
);
