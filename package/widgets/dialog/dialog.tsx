import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { Button } from "../button";
import { DialogEmits, DialogProps } from "./types";

const emits: DialogEmits = {};

export const Dialog = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-dialog",
    props: {
      title: {
        type: [String, Object, Function] as PropType<DialogProps["title"]>,
      },
      content: {
        type: [String, Object, Function] as PropType<DialogProps["content"]>,
      },
      width: { type: [Number, String] as PropType<number | string>, default: () => "500px" },
    },
    setup(props) {
      return () => (
        <div
          class={["l-dialog"]}
          style={{
            width: props.width,
          }}
        >
          <div class="l-dialog_title">Are you absolutely sure?</div>
          <div class="l-dialog_content">
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </div>
          <div class="l-dialog_footer">
            <Button ghost theme="default">
              Cancel
            </Button>
            <Button theme="primary">Yes, delete account</Button>
          </div>
        </div>
      );
    },
  })
);
