import { css } from "@emotion/css";
import { defineComponent, reactive } from "vue";
import {
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Dialog,
  Divider,
  Dropdown,
  Form,
  FormItem,
  Icon,
  Input,
  InputNumber,
  Menu,
  MenuItem,
  MenuSub,
  Message,
  Pagination,
  Popconfirm,
  Popover,
  Radio,
  Row,
  Select,
  Skeleton,
  Space,
  StepItem,
  Steps,
  Switch,
  Table,
  TabPane,
  Tabs,
  Tag,
  TimePicker,
  Tooltip,
  Upload,
  useDialog,
  useMessage,
  Validators,
} from "../../../package/linson";

const styles = {
  page: css({
    h3: {
      margin: "20px 0 10px",
    },
    ".l-card": {
      width: "100%",
      marginBottom: "16px",
    },
    ".box": {
      display: "flex",
      width: "100%",
      height: "20px",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "12px",
      backgroundColor: "#b3bcff",
    },
  }),
};

export const Development = defineComponent({
  setup() {
    const dialog = useDialog();
    const message = useMessage();
    const data = reactive({
      name: "",
      switch: true,
    });
    return () => (
      <div class={styles.page}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <h3>### 通用</h3>

            <Card title="按钮 Button">
              <Space>
                <Button theme="primary">Slot String</Button>
                <Button theme="primary">
                  <span>Slot Span</span>
                </Button>
                <Button
                  theme="primary"
                  v-slots={{
                    default: () => <span>VSlot Function</span>,
                  }}
                />
                <Button theme="primary" content="Prop String" />
                <Button theme="primary" content={<span>Prop Span</span>} />
                <Button theme="primary" content={() => <span>Prop Function</span>} />
              </Space>
            </Card>
            <Card title="分割线 Divider">
              <p>
                这个
                <Divider direction="vertical" />
                看起来
                <Divider direction="vertical" />
                好像不是很显眼
              </p>
            </Card>
            <Card title="下拉菜单 Dropdown">
              <Dropdown options={<span>item 1</span>}>
                <Button theme="primary">Hover me</Button>
              </Dropdown>
            </Card>
            <Card title="图标 Icon">
              <Icon size={16} color="yellow" name="home" />
            </Card>

            <h3>### 输入</h3>

            <Card title="级联选择器 Cascader">
              <Cascader />
            </Card>
            <Card title="复选框 Checkbox">
              <Checkbox label="Apple" />
              <Checkbox v-model:checked={data.switch} label="Apple" />
            </Card>
            <Card title="日期选择器 DatePicker">
              <DatePicker />
            </Card>
            <Card title="表单 Form">
              <Form>
                <FormItem
                  lable="年龄"
                  rules={[
                    { message: "必填项", type: "required" },
                    { message: "数值不小于0", type: "min", value: 0 },
                    { message: "数值不大于200", type: "max", value: 200 },
                  ]}
                >
                  <Input />
                </FormItem>
                <FormItem
                  lable="手机号"
                  rules={[
                    Validators.required(),
                    Validators.minLength(0),
                    Validators.maxLength(200),
                    Validators.pattern(/^(13[0-9]|15[0|1|3|6|7|8|9]|18[8|9])\d{8}$/),
                  ]}
                >
                  <Input />
                </FormItem>
              </Form>
            </Card>
            <Card title="输入框 Input">
              <Input v-model:value={data.name} />
            </Card>
            <Card title="数字输入框 InputNumber">
              <InputNumber />
            </Card>
            <Card title="单选框 Radio">
              <Radio label="Apple" />
              <Radio v-model:checked={data.switch} label="Apple" />
            </Card>
            <Card title="选择器 Select">
              <Select />
            </Card>
            <Card title="开关 Switch">
              <Space>
                <Switch v-model:checked={data.switch} />
                <Switch />
              </Space>
            </Card>
            <Card title="时间选择器 TimePicker">
              <TimePicker />
            </Card>
            <Card title="上传 Upload">
              <Upload />
            </Card>

            <h3>### 布局</h3>

            <Card title="栅格 Grid">
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <div class="box">24</div>
                </Col>
                <Col>
                  <div class="box">12</div>
                </Col>
                <Col span={6}>
                  <div class="box">6</div>
                </Col>
                <Col span={3}>
                  <div class="box">3</div>
                </Col>
                <Col span={2}>
                  <div class="box">2</div>
                </Col>
                <Col span={1}>
                  <div class="box">1</div>
                </Col>
              </Row>
            </Card>
            <Card title="间距 Space">
              <Space>
                <div class="box" style={{ width: "150px" }}></div>
                <div class="box" style={{ width: "150px" }}></div>
              </Space>
            </Card>

            <h3>### 展示</h3>

            <Card title="轮播图 Carousel">
              <Carousel>
                <CarouselItem>
                  <img
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
                  />
                </CarouselItem>
              </Carousel>
            </Card>
            <Card title="骨架屏 Skeleton">
              <Skeleton repeat={4} />
            </Card>
            <Card title="表格 Table">
              <Table />
            </Card>
            <Card title="标签 Tag">
              <Space>
                <Tag>标签一</Tag>
                <Tag theme="error">标签一</Tag>
                <Tag theme="primary">标签一</Tag>
                <Tag theme="success">标签一</Tag>
                <Tag theme="warning">标签一</Tag>
              </Space>
            </Card>

            <h3>### 反馈</h3>

            <Card title="警告 Alert">
              <Alert theme="success" message="这是一条成功的消息提示" />
            </Card>
            <Card title="对话框 Dialog">
              <Space>
                <Button
                  theme="primary"
                  onClick={() => [
                    dialog.info({
                      title: "成功",
                      content: "厉害",
                    }),
                  ]}
                >
                  Info
                </Button>
                <Button
                  theme="primary"
                  onClick={() => [
                    dialog.success({
                      title: "成功",
                      content: "厉害",
                    }),
                  ]}
                >
                  Success
                </Button>
                <Button
                  theme="primary"
                  onClick={() => [
                    dialog.error({
                      title: "成功",
                      content: "厉害",
                    }),
                  ]}
                >
                  Error
                </Button>
                <Button
                  theme="primary"
                  onClick={() => [
                    dialog.warning({
                      title: "成功",
                      content: "厉害",
                    }),
                  ]}
                >
                  Warning
                </Button>
              </Space>
            </Card>
            <Card title="全局提示 Message">
              <Space>
                <Button
                  theme="primary"
                  onClick={() => {
                    message.success("用于表示操作顺利达成[Success]");
                  }}
                >
                  Success
                </Button>
                <Button
                  theme="primary"
                  onClick={() => {
                    message.error("用于表示操作顺利达成[Error]");
                  }}
                >
                  Error
                </Button>
                <Button
                  theme="primary"
                  onClick={() => {
                    message.warning("用于表示操作顺利达成[Warning]");
                  }}
                >
                  Warning
                </Button>
              </Space>
            </Card>
            <Card title="气泡确认框 Popconfirm">
              <Button theme="primary">Popconfirm</Button>
              <Popconfirm title="Are you sure delete this task?">
                <a href="#">Delete</a>
              </Popconfirm>
            </Card>
            <Card title="气泡卡片 Popover">
              <Button theme="primary">Popover</Button>
              <Popover
                title="Title"
                v-slots={{
                  content: () => (
                    <>
                      <p>Content</p>
                      <p>Content</p>
                    </>
                  ),
                }}
              >
                <Button theme="primary">Hover me</Button>
              </Popover>
            </Card>
            <Card title="文字提示 Tooltip">
              <Button theme="primary">Tooltip</Button>
              <Tooltip title="prompt text">Tooltip will show when mouse enter.</Tooltip>
            </Card>

            <h3>### 导航</h3>

            <Card title="面包屑 Breadcrumb">
              <Breadcrumb>
                <BreadcrumbItem>湖北</BreadcrumbItem>
                <BreadcrumbItem>武汉</BreadcrumbItem>
                <BreadcrumbItem>洪山</BreadcrumbItem>
              </Breadcrumb>
            </Card>
            <Card title="导航菜单 Menu">
              <Menu>
                <MenuItem>菜单项</MenuItem>
                <MenuItem>菜单项</MenuItem>
                <MenuItem>菜单项</MenuItem>
                <MenuSub title="子菜单">
                  <MenuItem>子菜单项</MenuItem>
                  <MenuItem>子菜单项</MenuItem>
                  <MenuItem>子菜单项</MenuItem>
                </MenuSub>
              </Menu>
            </Card>
            <Card title="分页 Pagination">
              <Pagination total={100} page={1} size={20} options={[10, 20, 30, 50, 100]} />
            </Card>
            <Card title="步骤条 Steps">
              <Steps>
                <StepItem title="I Me Mine" description="All through the day, I me mine I me mine, I me mine" />
                <StepItem
                  title="Let It Be"
                  description="When I find myself in times of trouble Mother Mary comes to me"
                />
                <StepItem title="Come Together" description="Here come old flat top He come grooving up slowly" />
                <StepItem
                  title="Something"
                  description="Something in the way she moves Attracts me like no other lover"
                />
              </Steps>
            </Card>
            <Card title="选项卡 Tabs">
              <Tabs>
                <TabPane name="apple" tab="苹果">
                  乔布斯
                </TabPane>
                <TabPane name="microsoft" tab="微软">
                  比尔盖茨
                </TabPane>
                <TabPane name="google" tab="谷歌">
                  拉里佩奇
                </TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </div>
    );
  },
});
