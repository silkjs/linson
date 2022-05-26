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
              {data.dialogs.map((item) => (
                <Dialog {...item} />
              ))}
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
