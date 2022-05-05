import { mount } from "@vue/test-utils";
import { ConfigProvider } from "./config-provider";

describe("配置 ConfigProvider", () => {
  it("props default", () => {
    const wrapper = mount(ConfigProvider, {});
  });
});
