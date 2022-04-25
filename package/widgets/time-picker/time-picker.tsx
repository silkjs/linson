import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { TimePickerEmits, TimePickerProps } from "./time-picker-type";

const emits: TimePickerEmits = {};

export const TimePicker = withInstall(
  defineComponent({
    name: "l-time-picker",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-time-picker", {}]}></div>;
    },
  })
);
