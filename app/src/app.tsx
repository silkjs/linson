import { defineComponent } from "vue";
import { Button } from "../../package/widgets/button";
import { ViewTSX } from "./components/view-tsx";

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
