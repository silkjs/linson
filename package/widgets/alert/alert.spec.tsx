import { mount } from "@vue/test-utils";
import { Alert } from "./alert";
import { AlertProps } from "./types";

describe("警告 Alert", () => {
  it("props theme default", () => {
    const wrapper = mount(Alert, {});
  });
});
