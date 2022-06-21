import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { Icon, RightOutlined } from "../icon";
import {
  ContextMenuEmits,
  ContextMenuProps,
  ContextOption,
  OptionCheckbox,
  OptionContext,
  OptionLabel,
  OptionRadio,
  OptionSeparator,
} from "./types";

const emits: ContextMenuEmits = {};

const ContextMenuContext = defineComponent({
  props: {
    context: {
      type: Object as PropType<OptionContext>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      if ("children" in props.context) {
        return (
          <div
            class={[
              "l-context-menu-context",
              {
                "l-context-menu-context_disabled": props.context.disabled ?? false,
              },
            ]}
          >
            <div>{props.context.content}</div>
            <div class={["l-context-menu-context-suffix"]}>
              <Icon content={RightOutlined} />
            </div>
          </div>
        );
      }
      return (
        <div
          class={[
            "l-context-menu-context",
            {
              "l-context-menu-context_disabled": props.context.disabled ?? false,
            },
          ]}
        >
          <div>{props.context.content}</div>
          <div class={["l-context-menu-context-suffix"]}>{props.context.suffix}</div>
        </div>
      );
    };
  },
});
const ContextMenuCheckbox = defineComponent({
  props: {
    context: {
      type: Object as PropType<OptionCheckbox>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      return props.context.checkbox.map((item) => (
        <div class={["l-context-menu-checkbox"]}>
          <div>{item.content}</div>
          <div class={["l-context-menu-context-suffix"]}>{item.suffix}</div>
        </div>
      ));
    };
  },
});
const ContextMenuRadio = defineComponent({
  props: {
    context: {
      type: Object as PropType<OptionRadio>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      return props.context.radio.map((item) => (
        <div class={["l-context-menu-radio"]}>
          <div>{item.content}</div>
          <div class={["l-context-menu-context-suffix"]}>{item.suffix}</div>
        </div>
      ));
    };
  },
});
const ContextMenuLabel = defineComponent({
  props: {
    context: {
      type: Object as PropType<OptionLabel>,
      required: true,
    },
  },
  setup(props) {
    return () => <div class={["l-context-menu-label"]}>{props.context.label}</div>;
  },
});
const ContextMenuSeparator = defineComponent({
  props: {
    context: {
      type: Object as PropType<OptionSeparator>,
      required: true,
    },
  },
  setup() {
    return () => <div class={["l-context-menu-separator"]}></div>;
  },
});

const ContextMenuItem = defineComponent({
  props: {
    context: {
      type: Object as PropType<ContextOption>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      if ("content" in props.context) {
        return <ContextMenuContext context={props.context} />;
      }
      if ("checkbox" in props.context) {
        return <ContextMenuCheckbox context={props.context} />;
      }
      if ("radio" in props.context) {
        return <ContextMenuRadio context={props.context} />;
      }
      if ("label" in props.context) {
        return <ContextMenuLabel context={props.context} />;
      }
      if ("separator" in props.context) {
        return <ContextMenuSeparator context={props.context} />;
      }
    };
  },
});

export const ContextMenu = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-context-menu",
    props: {
      options: {
        type: Array as PropType<ContextMenuProps["options"]>,
        default: (): ContextMenuProps["options"] => [
          // ContextMenuContent
          { content: "Back", suffix: "⌘+[" },
          { content: "Foward", suffix: "⌘+]", disabled: true },
          { content: "Reload", suffix: "⌘+R" },
          {
            content: "More Tools",
            children: [
              { content: "Save Page As…", suffix: "⌘+S" },
              { content: "Create Shortcut…", suffix: "⌘+[" },
              { content: "Name Window…", suffix: "⌘+[" },
              { separator: true },
              { content: "Developer Tools", suffix: "⌘+[" },
            ],
          },
          // ContextMenuSeparator
          { separator: true },
          // ContextMenuCheckbox
          { checkbox: [{ content: "Show Bookmarks", suffix: "⌘+B" }, { content: "Show Full URLs" }] },
          { separator: true },
          // ContextMenuLabel
          { label: "People" },
          // ContextMenuRadio
          { radio: [{ content: "Pedro Duarte" }, { content: "Colm Tuite" }] },
        ],
      },
    },
    setup(props) {
      return () => (
        <div class={["l-context-menu", {}]}>
          {props.options.map((item) => (
            <ContextMenuItem context={item} />
          ))}
        </div>
      );
    },
  })
);
