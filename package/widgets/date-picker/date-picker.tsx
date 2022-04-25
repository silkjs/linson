import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { DatePickerEmits, DatePickerProps } from "./date-picker-type";

const emits: DatePickerEmits = {};

export const DatePicker = withInstall(
  defineComponent({
    name: "l-date-picker",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-date-picker", {}]}></div>;
    },
  })
);
