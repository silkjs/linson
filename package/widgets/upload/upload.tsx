import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { UploadEmits, UploadProps } from "./types";

const emits: UploadEmits = {};

export const Upload = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-upload",
    props: {
      disabled: Boolean as PropType<UploadProps["disabled"]>,
      placeholder: String as PropType<UploadProps["placeholder"]>,
      readonly: Boolean as PropType<UploadProps["readonly"]>,
      size: String as PropType<UploadProps["size"]>,
      status: String as PropType<UploadProps["status"]>,
      value: String as PropType<UploadProps["value"]>,
    },
    setup() {
      return () => <div class={["l-upload", {}]}></div>;
    },
  })
);
