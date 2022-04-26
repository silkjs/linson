import { defineComponent } from "vue";
import { withInstall } from "../../utils/common";

export const FormGroup = withInstall(
  defineComponent({
    name: "l-form-group",
    setup(props, { slots }) {
      return () => <div class={["l-form-group", {}]}>{slots.default?.()}</div>;
    },
  })
);
