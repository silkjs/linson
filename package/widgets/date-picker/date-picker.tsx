import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { DatePickerEmits, DatePickerProps } from "./date-picker-type";

const emits: DatePickerEmits = {};

export const DatePicker = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-date-picker",
    props: {
      disabled: Boolean as PropType<DatePickerProps["disabled"]>,
      placeholder: String as PropType<DatePickerProps["placeholder"]>,
      readonly: Boolean as PropType<DatePickerProps["readonly"]>,
      size: String as PropType<DatePickerProps["size"]>,
      status: String as PropType<DatePickerProps["status"]>,
      value: [Number] as PropType<DatePickerProps["value"]>,
    },
    setup() {
      return () => <div class={["l-date-picker", {}]}></div>;
    },
  })
);
