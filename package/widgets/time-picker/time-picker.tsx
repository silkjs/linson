import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { TimePickerEmits, TimePickerProps } from "./types";

const emits: TimePickerEmits = {};

export const TimePicker = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-time-picker",
    props: {
      disabled: Boolean as PropType<TimePickerProps["disabled"]>,
      placeholder: String as PropType<TimePickerProps["placeholder"]>,
      readonly: Boolean as PropType<TimePickerProps["readonly"]>,
      size: String as PropType<TimePickerProps["size"]>,
      status: String as PropType<TimePickerProps["status"]>,
      value: String as PropType<TimePickerProps["value"]>,
    },
    setup() {
      return () => <div class={["l-time-picker", {}]}></div>;
    },
  })
);
