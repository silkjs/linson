import { mount } from "@vue/test-utils";
import { Message } from "./message";

describe("全局提示 Message", () => {
  it("props default", () => {
    const wrapper = mount(Message, {});
  });
});
