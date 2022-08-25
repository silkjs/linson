import { type PropType, Teleport, defineComponent, inject, provide, reactive } from "vue";
import { withInstall } from "../../utils/common";
import { Dialog } from "./dialog";
import {
  DIALOG_API_INJECTION_KEY,
  DialogApiInjection,
  DialogProps,
  DialogProviderEmits,
  DialogProviderProps,
} from "./types";

const emits: DialogProviderEmits = {};

export const DialogProvider = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-dialog-provider",
    props: {
      to: {
        type: [String, Object] as PropType<DialogProviderProps["to"]>,
      },
    },
    setup(props, { slots }) {
      const data = reactive<{ dialogs: DialogProps[] }>({
        dialogs: [],
      });
      const api: DialogApiInjection = {
        create(value) {
          data.dialogs.push(value);
        },
        error(value) {
          data.dialogs.push(value);
        },
        info(value) {
          data.dialogs.push(value);
        },
        success(value) {
          data.dialogs.push(value);
        },
        warning(value) {
          data.dialogs.push(value);
        },
      };
      provide(DIALOG_API_INJECTION_KEY, api);
      return () => (
        <>
          {slots.default?.()}
          <Teleport to="body">
            <div class="l-dialog-provider">
              {data.dialogs.length > 0 && <div class="l-dialog-provider-mask"></div>}
              <div class="l-dialog-provider-container">
                {data.dialogs.map((item) => (
                  <div
                    style={{
                      display: "flex",
                      position: "relative",
                      top: "100px",
                      width: "fit-content",
                      borderRadius: "2px",
                      boxShadow: "0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d",
                      margin: "0 auto",
                    }}
                  >
                    <Dialog {...item} />
                  </div>
                ))}
              </div>
            </div>
          </Teleport>
        </>
      );
    },
  })
);

export const useDialog = () => {
  const dialog = inject(DIALOG_API_INJECTION_KEY);
  if (typeof dialog === "undefined") {
    throw new Error("No outer <l-dialog-provider /> founded.");
  }
  return dialog;
};
