import { defineComponent } from "vue";
import { ViewTSX } from "./components/view-tsx";
import { Button } from "@silkjs/linson";
import "@silkjs/linson/dist/index.css";

export const App = defineComponent({
  setup() {
    return () => (
      <div
        style={{
          padding: "16px",
        }}
      >
        <h3>Usage</h3>
        <ViewTSX />
        <Button
          block
          theme="primary"
          content="Action"
          onClick={() => {
            console.log("Hello");
          }}
        />
      </div>
    );
  },
});
