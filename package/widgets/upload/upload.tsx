import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { UploadEmits, UploadProps } from "./upload-type";

const emits: UploadEmits = {};

export const Upload = withInstall(
  defineComponent({
    name: "l-upload",
    props: {},
    emits: { ...emits },
    setup() {
      return () => <div class={["l-upload", {}]}></div>;
    },
  })
);
