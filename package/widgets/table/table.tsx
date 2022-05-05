import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { TableEmits, TableProps } from "./types";

const emits: TableEmits = {};

export const Table = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-table",
    props: {
      columns: {
        default: (): TableProps["columns"] => [],
        type: Array as PropType<TableProps["columns"]>,
      },
      date: {
        default: (): TableProps["date"] => [],
        type: Array as PropType<TableProps["date"]>,
      },
      loading: {
        default: (): TableProps["loading"] => false,
        type: Boolean as PropType<TableProps["loading"]>,
      },
    },
    setup() {
      return () => <div class={["l-table", {}]}></div>;
    },
  })
);
