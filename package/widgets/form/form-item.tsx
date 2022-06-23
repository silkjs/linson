import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { FormItemEmits, FormItemProps } from "./types";

const emits: FormItemEmits = {};

export const FormItem = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-form-item",
    props: {
      lable: String as PropType<FormItemProps["lable"]>,
      rules: Array as PropType<FormItemProps["rules"]>,
      size: String as PropType<FormItemProps["size"]>,
    },
    setup(props, { slots }) {
      return () => (
        <div
          class={[
            "l-form-item",
            {
              "l-form-item-has-error": props.lable === "年龄",
            },
          ]}
        >
          <div class="l-form-item-label">
            <label>{props.lable}</label>
          </div>
          <div class="l-form-item-control">
            <div class="l-form-item-control-content">{slots.default?.()}</div>
            <div class="l-form-item-control-explain">必填项</div>
          </div>
        </div>
      );
    },
  })
);
