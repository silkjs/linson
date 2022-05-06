import { defineComponent } from "vue";
import { ConfigProvider, DialogProvider, MessageProvider } from "../../package/components";

import { Development } from "./views/development";
import { Production } from "./views/production";

export const App = defineComponent({
  setup() {
    return () =>
      import.meta.env.DEV ? (
        <ConfigProvider>
          <MessageProvider>
            <DialogProvider>
              <Development />
            </DialogProvider>
          </MessageProvider>
        </ConfigProvider>
      ) : (
        <Production />
      );
  },
});
