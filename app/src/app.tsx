import { defineComponent } from "vue";
import {
  Button,
  Cascader,
  Checkbox,
  CheckboxGroup,
  Col,
  DatePicker,
  Form,
  FormItem,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  Row,
  Select,
  Switch,
  TimePicker,
  Upload,
} from "@silkjs/linson";

export const App = defineComponent({
  setup() {
    return () => (
      <div
        style={{
          padding: "16px",
        }}
      >
        <h3>Usage</h3>
        <Row gutter={[16, 16]}>
          <Col span={4}>
            <Button
              theme="primary"
              onClick={() => {
                console.log("Hello");
              }}
            >
              Action
            </Button>
          </Col>
          <Col span={4}>
            <Button
              theme="primary"
              onClick={() => {
                console.log("Hello");
              }}
            >
              Action
            </Button>
          </Col>
          <Col span={4}>
            <Button
              theme="primary"
              onClick={() => {
                console.log("Hello");
              }}
            >
              Action
            </Button>
          </Col>
          <Col span={4}>
            <Button
              theme="primary"
              onClick={() => {
                console.log("Hello");
              }}
            >
              Action
            </Button>
          </Col>
          <Col span={4}>
            <Button
              theme="primary"
              onClick={() => {
                console.log("Hello");
              }}
            >
              Action
            </Button>
          </Col>
        </Row>
        <Form>
          <FormItem lable="级联选择器">
            <Cascader />
          </FormItem>
          <FormItem lable="复选框">
            <CheckboxGroup />
          </FormItem>
          <FormItem lable="复选框组">
            <Checkbox />
          </FormItem>
          <FormItem lable="日期选择器">
            <DatePicker />
          </FormItem>
          <FormItem lable="输入框">
            <Input />
          </FormItem>
          <FormItem lable="数字输入框">
            <InputNumber />
          </FormItem>
          <FormItem lable="单选框">
            <Radio />
          </FormItem>
          <FormItem lable="单选框组">
            <RadioGroup />
          </FormItem>
          <FormItem lable="选择器">
            <Select />
          </FormItem>
          <FormItem lable="开关">
            <Switch />
          </FormItem>
          <FormItem lable="时间选择器">
            <TimePicker />
          </FormItem>
          <FormItem lable="上传">
            <Upload />
          </FormItem>
        </Form>
      </div>
    );
  },
});
