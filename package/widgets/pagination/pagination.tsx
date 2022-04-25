import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { PaginationEmits, PaginationProps } from "./pagination-type";

const emits: PaginationEmits = {};

export const Pagination = withInstall(
  defineComponent({
    name: "l-pagination",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-pagination", {}]}></div>;
    },
  })
);
