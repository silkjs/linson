import { defineComponent, reactive } from "vue";
import { Form, FormItem } from "./components";
import { Validators } from "./utils/form";

export const Usage = defineComponent({
  setup() {
    const data = reactive({
      age: 0,
      phone: "",
    });
    return () => (
      <>
        <Form>
          <FormItem
            rules={[
              { message: "必填项", type: "required" },
              { message: "数值不小于0", type: "min", value: 0 },
              { message: "数值不大于200", type: "max", value: 200 },
            ]}
          ></FormItem>
          <FormItem
            rules={[
              Validators.required(),
              Validators.minLength(0),
              Validators.maxLength(200),
              Validators.pattern(/^(13[0-9]|15[0|1|3|6|7|8|9]|18[8|9])\d{8}$/),
            ]}
          ></FormItem>
        </Form>
      </>
    );
  },
});
