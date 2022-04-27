import { Form, FormItem } from "./components";
import { Validators } from "./utils/form";

function Usage() {
  return (
    <>
      <Form>
        <FormItem
          rules={[
            { message: "", type: "required" },
            { message: "", type: "min", value: 0 },
            { message: "", type: "max", value: 200 },
          ]}
        ></FormItem>
        <FormItem
          rules={[Validators.required(), Validators.min(0), Validators.max(200), Validators.max(200)]}
        ></FormItem>
        <FormItem
          rules={[Validators.required(), Validators.minLength(0), Validators.max(200), Validators.max(200)]}
        ></FormItem>
      </Form>
    </>
  );
}
