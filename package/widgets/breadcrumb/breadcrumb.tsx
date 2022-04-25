import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { BreadcrumbEmits, BreadcrumbProps } from "./breadcrumb-type";

const emits: BreadcrumbEmits = {};

export const Breadcrumb = withInstall(
  defineComponent({
    name: "l-breadcrumb",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-breadcrumb", {}]}></div>;
    },
  })
);
