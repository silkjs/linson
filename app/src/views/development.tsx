import { defineComponent } from "vue";
import { Button, Col, Row, Skeleton, Space, TabPane, Tabs } from "../../../package/linson";

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
          <Space>
            <Button theme="primary" content="Prop String" />
            <Button theme="primary" content={<span>Prop Span</span>} />
            <Button theme="primary" content={() => <span>Prop Function</span>} />
          </Space>
        </Col>
        <Col span={24}>
          <Skeleton repeat={3} />
        </Col>
      </Row>
    );
  },
});
