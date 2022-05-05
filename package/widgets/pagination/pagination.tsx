import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { PaginationEmits, PaginationProps } from "./types";

const emits: PaginationEmits = {
  change: (type, value) => ["page", "size"].includes(type) && typeof value === "number",
};

export const Pagination = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-pagination",
    props: {
      options: {
        default: (): PaginationProps["options"] => [10, 20, 50, 100],
        type: Array as PropType<PaginationProps["options"]>,
      },
      page: {
        default: (): PaginationProps["page"] => 1,
        type: Number as PropType<PaginationProps["page"]>,
      },
      showJumper: {
        default: (): PaginationProps["showJumper"] => false,
        type: Boolean as PropType<PaginationProps["showJumper"]>,
      },
      showPicker: {
        default: (): PaginationProps["showPicker"] => false,
        type: Boolean as PropType<PaginationProps["showPicker"]>,
      },
      size: {
        default: (): PaginationProps["size"] => 10,
        type: Number as PropType<PaginationProps["size"]>,
      },
      total: {
        default: (): PaginationProps["total"] => 0,
        type: Number as PropType<PaginationProps["total"]>,
      },
    },
    setup() {
      return () => <div class={["l-pagination", {}]}></div>;
    },
  })
);
