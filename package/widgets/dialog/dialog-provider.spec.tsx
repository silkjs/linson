import { mount } from "@vue/test-utils";
import { DialogProvider } from "./dialog-provider";

describe("对话框 DialogProvider", () => {
  it("props default", () => {
    const wrapper = mount(DialogProvider, {});
  });
});
