import { defineComponent } from "vue";
import {
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Row,
  Skeleton,
  Space,
  TabPane,
  Tabs,
  Tag,
} from "../../../package/linson";

export const Development = defineComponent({
  setup() {
    return () => (
      <Row gutter={[16, 16]}>
        <Col span={24}>
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
        </Col>
        <Col span={24}>
          <Space>
            <Button theme="primary">Slot String</Button>
            <Button theme="primary">
              <span>Slot Span</span>
            </Button>
            {/* <Button
              theme="primary"
              v-slots={{
                default: "VSlot String",
              }}
            /> */}
            {/* <Button
              theme="primary"
              v-slots={{
                default: <span>VSlot Span</span>,
              }}
            /> */}
            <Button
              theme="primary"
              v-slots={{
                default: () => <span>VSlot Function</span>,
              }}
            />
          </Space>
        </Col>
        <Col span={24}>
          <Alert>这是一条成功的消息提示</Alert>
        </Col>
        <Col span={24}>
          <Space>
            <Tag>标签一</Tag>
            <Tag theme="error">标签一</Tag>
            <Tag theme="primary">标签一</Tag>
            <Tag theme="success">标签一</Tag>
            <Tag theme="warning">标签一</Tag>
          </Space>
        </Col>
        <Col span={24}>
          <Space>
            <Button theme="primary" content="Prop String" />
            <Button theme="primary" content={<span>Prop Span</span>} />
            <Button theme="primary" content={() => <span>Prop Function</span>} />
          </Space>
        </Col>
        <Col span={24}>
          <Skeleton repeat={3} />
        </Col>
        <Col span={24}>
          <Breadcrumb>
            <BreadcrumbItem>湖北</BreadcrumbItem>
            <BreadcrumbItem>武汉</BreadcrumbItem>
            <BreadcrumbItem>洪山</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
    );
  },
});
