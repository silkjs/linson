import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { RadioEmits, RadioProps } from "./radio-type";

const emits: RadioEmits = {};

export const Radio = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-radio",
    props: {
      disabled: Boolean as PropType<RadioProps["disabled"]>,
      placeholder: String as PropType<RadioProps["placeholder"]>,
      readonly: Boolean as PropType<RadioProps["readonly"]>,
      size: String as PropType<RadioProps["size"]>,
      status: String as PropType<RadioProps["status"]>,
      value: String as PropType<RadioProps["value"]>,
    },
    setup() {
      return () => (
        <div class={["l-radio", {}]}>
          <input type="radio" />
        </div>
      );
    },
  })
);
