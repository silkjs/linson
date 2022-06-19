import { type PropType, Teleport, defineComponent, onMounted, reactive, ref } from "vue";
import { withInstall } from "../../utils/common";
import { getContent } from "../../utils/context";
import { PopoverEmits, PopoverProps } from "./types";

const emits: PopoverEmits = {};

export const Popover = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-popover",
    props: {
      placement: {
        default: (): PopoverProps["placement"] => "top",
        type: String as PropType<PopoverProps["placement"]>,
      },
      title: [String, Object, Function] as PropType<PopoverProps["title"]>,
      content: [String, Object, Function] as PropType<PopoverProps["content"]>,
      trigger: {
        default: (): PopoverProps["trigger"] => "hover",
        type: String as PropType<PopoverProps["trigger"]>,
      },
    },
    setup(props, { slots }) {
      const el = ref<HTMLDivElement>();
      const data = reactive({
        show: false,
        top: 0,
        left: 0,
      });
      onMounted(() => {
        // el.value!.addEventListener("click", () => {
        //   const res = el.value!.getBoundingClientRect();
        //   data.top = res.top + window.scrollY + res.height;
        //   data.left = res.left;
        //   data.show = true;
        // });
      });
      return () => {
        const title = getContent(props, slots, "title", "title");
        const content = getContent(props, slots, "content", "content");
        return (
          <>
            <div ref={el}>{slots.default?.()}</div>
            <Teleport to="body">
              <div
                class={["l-popover", {}]}
                v-show={data.show}
                style={{
                  position: "absolute",
                  top: `${data.top}px`,
                  left: `${data.left}px`,
                  backgroundColor: "#fff",
                  padding: "16px",
                  boxShadow: "0 0 2px 0 rgba(0,0,0,0.1)",
                }}
              >
                <h3>{title}</h3>
                <div>{content}</div>
              </div>
            </Teleport>
          </>
        );
      };
    },
  })
);
