import {
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Carousel,
  Col,
  ConfigProvider,
  Dialog,
  DialogProvider,
  Divider,
  Dropdown,
  Form,
  FormItem,
  Icon,
  Menu,
  MenuItem,
  MenuSub,
  Message,
  MessageProvider,
  Pagination,
  Popconfirm,
  Popover,
  Row,
  Skeleton,
  Space,
  StepItem,
  Steps,
  Table,
  TabPane,
  Tabs,
  Tag,
  Tooltip,
  useDialog,
  useMessage,
  Validators,
} from "@silkjs/linson";
import { defineComponent } from "vue";

export const Production = defineComponent({
  setup() {
    const message = useMessage();
    // const dialog = useDialog();
    // const data = reactive({
    //   age: 0,
    //   phone: "",
    // });
    return () => (
      <div
        style={{
          padding: "16px",
        }}
      >
        <h3>General</h3>
        <Button theme="primary">Action</Button>
        <p>
          这个
          <Divider direction="vertical" />
          看起来
          <Divider direction="vertical" />
          好像不是很显眼
        </p>
        <div>
          <p>
            这是第一种类型的内容元素或信息数据，通过分割线进行分割。分割线方便用户清晰明确的读取和预览，减少信息符合，提高用户使用效率。避免大段内容的聚集、信息负荷过多，导致信息获取或内容操作效率降低。
          </p>
          <Divider />
          <p>
            这是第二种类型的内容元素或信息数据，通过分割线进行分割。分割线方便用户清晰明确的读取和预览，减少信息符合，提高用户使用效率。避免大段内容的聚集、信息负荷过多，导致信息获取或内容操作效率降低。
          </p>
          <Divider dashed />
          <p>
            这是第三种类型的内容元素或信息数据，通过分割线进行分割。分割线方便用户清晰明确的读取和预览，减少信息符合，提高用户使用效率。避免大段内容的聚集、信息负荷过多，导致信息获取或内容操作效率降低。
          </p>
        </div>
        <Dropdown
          v-slots={{
            overlay: () => (
              <>
                <p>item one</p>
              </>
            ),
          }}
        >
          <a>Hover me</a>
        </Dropdown>
        <Icon size={16} color="yellow" name="home" />
        <h3>Entry</h3>
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
        <h3>Layout</h3>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Space>
          <Button>Action</Button>
          <Button>Action</Button>
        </Space>
        <h3>Display</h3>
        <Carousel>
          <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
          <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" />
          <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" />
          <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
        </Carousel>
        <Skeleton text />
        <Table />
        <Tag theme="primary">标签一</Tag>
        <h3>Feedback</h3>
        <Alert theme="success" message="这是一条成功的消息提示" />
        <Dialog title="确认" content="你确定" />
        <Button
          onClick={() => {
            // dialog.create({
            //   content: "你确定",
            //   title: "确认",
            // });
          }}
        >
          Confirm
        </Button>
        <Message theme="success">用于表示操作顺利达成</Message>
        <Button
          onClick={() => {
            // message.create({
            //   content: "Are you sure delete this task?",
            // });
          }}
        >
          Confirm
        </Button>
        <Popconfirm title="Are you sure delete this task?">
          <a href="#">Delete</a>
        </Popconfirm>
        <Popover
          title="Title"
          v-slots={{
            content: () => (
              <>
                {" "}
                <p>Content</p>
                <p>Content</p>
              </>
            ),
          }}
        >
          <Button theme="primary">Hover me</Button>
        </Popover>
        <Tooltip title="prompt text">Tooltip will show when mouse enter.</Tooltip>
        <h3>Navigation</h3>
        <Breadcrumb>
          <BreadcrumbItem>湖北</BreadcrumbItem>
          <BreadcrumbItem>武汉</BreadcrumbItem>
          <BreadcrumbItem>洪山</BreadcrumbItem>
        </Breadcrumb>
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
        <Pagination total={100} page={1} size={20} options={[10, 20, 30, 50, 100]} />
        <Steps>
          <StepItem title="I Me Mine" description="All through the day, I me mine I me mine, I me mine" />
          <StepItem title="Let It Be" description="When I find myself in times of trouble Mother Mary comes to me" />
          <StepItem title="Come Together" description="Here come old flat top He come grooving up slowly" />
          <StepItem title="Something" description="Something in the way she moves Attracts me like no other lover" />
        </Steps>
        <Tabs>
          <TabPane name="oasis" tab="Oasis">
            Wonderwall
          </TabPane>
          <TabPane name="the beatles" tab="the Beatles">
            Hey Jude
          </TabPane>
          <TabPane name="jay chou" tab="周杰伦">
            七里香
          </TabPane>
        </Tabs>
      </div>
    );
  },
});
