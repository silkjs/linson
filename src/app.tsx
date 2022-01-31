import { css } from "@emotion/css";
import {
  NConfigProvider,
  NDialogProvider,
  NMessageProvider,
  dateZhCN,
  zhCN,
} from "naive-ui";
import { Suspense, defineComponent } from "vue";
import { RouterView } from "vue-router";
import { VisionCard } from "./widgets/vision";

export const App = defineComponent({
  setup() {
    return () => (
      <Suspense>
        <NConfigProvider
          locale={zhCN}
          dateLocale={dateZhCN}
          themeOverrides={{}}
        >
          <NDialogProvider>
            <NMessageProvider>
              <h3>app</h3>
              <div
                class={css({
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  columnGap: 20,
                  rowGap: 20,
                })}
              >
                <VisionCard />
                <VisionCard />
                <VisionCard />
                <VisionCard />
                <VisionCard />
                <VisionCard />
              </div>
            </NMessageProvider>
          </NDialogProvider>
        </NConfigProvider>
      </Suspense>
    );
  },
});
