import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { CascaderEmits, CascaderProps } from "./cascader-type";

const emits: CascaderEmits = {
  blur: () => true,
  focus: () => true,
  "update:show": (value: boolean) => typeof value === "boolean",
  "update:value": (value: any) => typeof value !== "undefined",
};

export const Cascader = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-cascader",
    props: {
      disabled: Boolean as PropType<CascaderProps["disabled"]>,
      options: Array as PropType<CascaderProps["options"]>,
      placeement: String as PropType<CascaderProps["placeement"]>,
      placeholder: String as PropType<CascaderProps["placeholder"]>,
      status: String as PropType<CascaderProps["status"]>,
      value: [String, Number, Array] as PropType<CascaderProps["value"]>,
    },
    setup(props, { slots }) {
      return () => <div class={["l-cascader", {}]}></div>;
    },
  })
);
