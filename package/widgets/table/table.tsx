import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { TableEmits, TableProps } from "./table-type";

const emits: TableEmits = {};

export const Table = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-table",
    props: {},
    setup() {
      return () => <div class={["l-table", {}]}></div>;
    },
  })
);
