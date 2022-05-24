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
      head: {
        type: [String, Object, Function] as PropType<DialogProps["head"]>,
      },
      body: {
        type: [String, Object, Function] as PropType<DialogProps["body"]>,
      },
      foot: {
        type: [String, Object, Function] as PropType<DialogProps["foot"]>,
      },
    },
    setup() {
      return () => (
        <div class={["l-dialog"]}>
          <div class="l-dialog_head">Are you absolutely sure?</div>
          <div class="l-dialog_body">
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </div>
          <div class="l-dialog_foot">
            <Button>Cancel</Button>
            <Button>Yes, delete account</Button>
          </div>
        </div>
      );
    },
  })
);
