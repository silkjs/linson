import { ConfigProvider, DialogProvider, MessageProvider } from "@silkjs/linson";
import { defineComponent } from "vue";
import { Production } from "./views/production";

export const ModeProduction = defineComponent({
  setup() {
    return () => (
      <ConfigProvider>
        <MessageProvider>
          <DialogProvider>
            <Production />
          </DialogProvider>
        </MessageProvider>
      </ConfigProvider>
    );
  },
});
