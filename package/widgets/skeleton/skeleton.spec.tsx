import { mount } from "@vue/test-utils";
import { Skeleton } from "./skeleton";

describe("骨架屏 Skeleton", () => {
  it("props default", () => {
    const wrapper = mount(Skeleton, {});
  });
});
