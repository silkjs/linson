import { defineComponent, type PropType } from "vue";
import { css } from "@emotion/css";
import { NSpin } from "naive-ui";

export enum VisionStatus {
  Pending,
  Fulfilled,
  Rejected,
}

export const Vision = defineComponent({
  props: {
    status: {
      type: Number as PropType<VisionStatus>,
      required: true,
    },
    source: {
      type: Object as PropType<{
        type: "pie";
        data: Array<{}>;
      }>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      switch (props.status) {
        case VisionStatus.Fulfilled:
          return <p>Fulfilled</p>;
        case VisionStatus.Rejected:
          return <p>Rejected</p>;
        default:
          return <NSpin />;
      }
    };
  },
});

export const VisionCard = defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      default: () => "标题",
    },
    type: {
      type: String as PropType<string>,
      default: () => "pie",
    },
  },
  setup(props) {
    return () => (
      <div
        class={css({
          border: "1px solid #666",
          backgroundColor: "#fff",
        })}
      >
        <h3>{props.title}</h3>
        <Vision
          status={VisionStatus.Pending}
          source={{ type: "pie", data: [] }}
        />
      </div>
    );
  },
});
