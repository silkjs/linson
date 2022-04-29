import { defineComponent } from "vue";

export const ShowCase = defineComponent({
  setup(props, { slots }) {
    return () => (
      <div
        style={{
          padding: "16px",
          border: "1px solid #f3f3f3",
        }}
      >
        {slots.default?.()}
      </div>
    );
  },
});
