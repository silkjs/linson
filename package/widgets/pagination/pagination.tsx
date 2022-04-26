import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { PaginationEmits, PaginationProps } from "./pagination-type";

const emits: PaginationEmits = {};

export const Pagination = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-pagination",
    props: {},
    setup() {
      return () => <div class={["l-pagination", {}]}></div>;
    },
  })
);
