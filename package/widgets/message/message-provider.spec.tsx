import { mount } from "@vue/test-utils";
import { MessageProvider } from "./message-provider";

describe("全局提示 MessageProvider", () => {
  it("props default", () => {
    const wrapper = mount(MessageProvider, {});
  });
});
