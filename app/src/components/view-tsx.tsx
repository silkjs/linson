import { defineComponent } from "vue";
import { Button } from "../../../package/widgets/button";
import { Col, Row } from "../../../package/widgets/grid";

export const ViewTSX = defineComponent({
  setup() {
    return () => (
      <div>
        <Row gutter={[16, 16]}>
          {/* default */}
          <Col span={6}>
            <Button
              theme="default"
              variant="base"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          <Col span={6}>
            <Button
              theme="default"
              variant="outline"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          <Col span={6}>
            <Button
              theme="default"
              variant="dashed"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          <Col span={6}>
            <Button
              theme="default"
              variant="text"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          {/* primary */}
          <Col span={6}>
            <Button
              theme="primary"
              variant="base"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          <Col span={6}>
            <Button
              theme="primary"
              variant="outline"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          <Col span={6}>
            <Button
              theme="primary"
              variant="dashed"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          <Col span={6}>
            <Button
              theme="primary"
              variant="text"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          {/* danger */}
          <Col span={6}>
            <Button
              theme="error"
              variant="base"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          <Col span={6}>
            <Button
              theme="error"
              variant="outline"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          <Col span={6}>
            <Button
              theme="error"
              variant="dashed"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          <Col span={6}>
            <Button
              theme="error"
              variant="text"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          {/* warning */}
          <Col span={6}>
            <Button
              theme="warning"
              variant="base"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          <Col span={6}>
            <Button
              theme="warning"
              variant="outline"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          <Col span={6}>
            <Button
              theme="warning"
              variant="dashed"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          <Col span={6}>
            <Button
              theme="warning"
              variant="text"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          {/* success */}
          <Col span={6}>
            <Button
              theme="success"
              variant="base"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          <Col span={6}>
            <Button
              theme="success"
              variant="outline"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          <Col span={6}>
            <Button
              theme="success"
              variant="dashed"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
          <Col span={6}>
            <Button
              theme="success"
              variant="text"
              content="Action"
              onClick={() => {
                console.log("Hello");
              }}
            />
          </Col>
        </Row>
      </div>
    );
  },
});
