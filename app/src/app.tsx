import { defineComponent } from "vue";
import { ViewTSX } from "./components/view-tsx";
import { Button, Space } from "@silkjs/linson";
import ViewTEM from "./components/view-template.vue";

export const App = defineComponent({
  setup() {
    return () => (
      <div
        style={{
          padding: "16px",
        }}
      >
        <h3>Usage</h3>
        <ViewTEM />
        <ViewTSX />
        <Space size="small">
          <Button
            theme="primary"
            onClick={() => {
              console.log("Hello");
            }}
          >
            Action
          </Button>
          <Button
            theme="primary"
            content="Action"
            onClick={() => {
              console.log("Hello");
            }}
          />
          <Button
            theme="primary"
            content="Action"
            onClick={() => {
              console.log("Hello");
            }}
          />
        </Space>
      </div>
    );
  },
});
