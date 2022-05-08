import { defineComponent } from "vue";
import { ConfigProvider, DialogProvider, MessageProvider } from "../../package/components";
import { Development } from "./views/development";

export const ModeDevelopment = defineComponent({
  setup() {
    return () => (
      <ConfigProvider>
        <MessageProvider>
          <DialogProvider>
            <Development />
          </DialogProvider>
        </MessageProvider>
      </ConfigProvider>
    );
  },
});
