import { mount } from "@vue/test-utils";
import { Button } from "./button";
import { ButtonProps } from "./types";

describe("按钮 Button", () => {
  // block
  it("props block default", () => {
    const wrapper = mount(Button, {});
    expect(wrapper.vm.$props.block).toBeFalsy();
    expect(wrapper.classes().includes("l-size-full-width")).toBeFalsy();
  });
  it("props block false", () => {
    const wrapper = mount(Button, {
      props: {
        block: false,
      },
    });
    expect(wrapper.vm.$props.block).toBeFalsy();
    expect(wrapper.classes().includes("l-size-full-width")).toBeFalsy();
  });
  it("props block true", () => {
    const wrapper = mount(Button, {
      props: {
        block: true,
      },
    });
    expect(wrapper.vm.$props.block).toBeTruthy();
    expect(wrapper.classes()).toContain("l-size-full-width");
  });
  // theme
  it("props theme", () => {
    const wrapper = mount(Button, {});
    expect(wrapper.vm.$props.theme).toEqual("default");
    expect(wrapper.classes()).toContain("l-button-theme-default");
  });
  const themes: Array<ButtonProps["theme"]> = ["default", "primary", "error", "warning", "success"];
  themes.forEach((theme) => {
    it(`props theme ${theme}`, () => {
      const wrapper = mount(Button, {
        props: { theme },
      });
      expect(wrapper.vm.$props.theme).toEqual(theme);
      expect(wrapper.classes()).toContain(`l-button-theme-${theme}`);
    });
  });
  // variant
  it("props variant", () => {
    const wrapper = mount(Button, {});
    expect(wrapper.vm.$props.variant).toEqual("base");
    expect(wrapper.classes()).toContain("l-button-variant-base");
  });
  const variants: Array<ButtonProps["variant"]> = ["base", "outline", "dashed", "text"];
  variants.forEach((variant) => {
    it(`props variant ${variant}`, () => {
      const wrapper = mount(Button, {
        props: { variant },
      });
      expect(wrapper.vm.$props.variant).toEqual(variant);
      expect(wrapper.classes()).toContain(`l-button-variant-${variant}`);
    });
  });

  it("props content default and slot", () => {
    const wrapper = mount(Button, {
      slots: {
        default: () => <span>action</span>,
      },
    });
    const content = wrapper.find("span");
    expect(content.exists()).toBeTruthy();
    expect(content.text()).toContain("action");
  });
  it("props content custom string", () => {
    const wrapper = mount(Button, {
      props: {
        content: "action",
      },
    });
    expect(typeof wrapper.html()).toEqual("string");
    expect(wrapper.text()).toContain("action");
  });
  it("props content custom LNode", () => {
    const wrapper = mount(Button, {
      props: {
        content: () => <span>action</span>,
      },
    });
    const content = wrapper.find("span");
    expect(content.exists()).toBeTruthy();
    expect(content.text()).toContain("action");
  });
  it("props content custom and slot", () => {
    const wrapper = mount(Button, {
      props: {
        content: "PAction",
      },
      slots: {
        default: () => <span>SAction</span>,
      },
    });
    expect(typeof wrapper.html()).toEqual("string");
    expect(wrapper.text()).toContain("PAction");
  });
  // click
  it("emits click", () => {
    const wrapper = mount(Button, {
      slots: {
        default: () => <span>Action</span>,
      },
    });
    wrapper.trigger("click");
    const clickEvent = wrapper.emitted("click");
    expect(wrapper.emitted()).toHaveProperty("click");
    expect(clickEvent).toHaveLength(1);
    wrapper.trigger("click");
    expect(clickEvent).toHaveLength(2);
  });
});
