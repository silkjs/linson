import { defineComponent } from "vue";
import { Button, Row, Col } from "@silkjs/linson";

export const ViewTSX = defineComponent({
  setup() {
    return () => (
      <div>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Button theme="default" variant="base">
              Action
            </Button>
          </Col>
          <Col span={6}>
            <Button theme="default" variant="outline" content="Action" />
          </Col>
          <Col span={6}>
            <Button theme="default" variant="dashed" content="Action" />
          </Col>
          <Col span={6}>
            <Button theme="default" variant="text" content="Action" />
          </Col>
          {/* primary */}
          <Col span={6}>
            <Button theme="primary" variant="base" content="Action" />
          </Col>
          <Col span={6}>
            <Button theme="primary" variant="outline" content="Action" />
          </Col>
          <Col span={6}>
            <Button theme="primary" variant="dashed" content="Action" />
          </Col>
          <Col span={6}>
            <Button theme="primary" variant="text" content="Action" />
          </Col>
          {/* danger */}
          <Col span={6}>
            <Button theme="error" variant="base" content="Action" />
          </Col>
          <Col span={6}>
            <Button theme="error" variant="outline" content="Action" />
          </Col>
          <Col span={6}>
            <Button theme="error" variant="dashed" content="Action" />
          </Col>
          <Col span={6}>
            <Button theme="error" variant="text" content="Action" />
          </Col>
          {/* warning */}
          <Col span={6}>
            <Button theme="warning" variant="base" content="Action" />
          </Col>
          <Col span={6}>
            <Button theme="warning" variant="outline" content="Action" />
          </Col>
          <Col span={6}>
            <Button theme="warning" variant="dashed" content="Action" />
          </Col>
          <Col span={6}>
            <Button theme="warning" variant="text" content="Action" />
          </Col>
          {/* success */}
          <Col span={6}>
            <Button theme="success" variant="base" content="Action" />
          </Col>
          <Col span={6}>
            <Button theme="success" variant="outline" content="Action" />
          </Col>
          <Col span={6}>
            <Button theme="success" variant="dashed" content="Action" />
          </Col>
          <Col span={6}>
            <Button theme="success" variant="text" content="Action" />
          </Col>
        </Row>
      </div>
    );
  },
});
