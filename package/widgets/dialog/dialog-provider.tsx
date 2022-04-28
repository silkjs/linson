import { type PropType, defineComponent, inject, provide } from "vue";
import { withInstall } from "../../utils/common";
import {
  DIALOG_API_INJECTION_KEY,
  DialogApiInjection,
  DialogProviderEmits,
  DialogProviderProps,
} from "./dialog-provider-type";

const emits: DialogProviderEmits = {};

export const DialogProvider = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-dialog-provider",
    props: {},
    setup() {
      const api: DialogApiInjection = {
        create() {
          //
        },
        error() {
          //
        },
        info() {
          //
        },
        success() {
          //
        },
        warning() {
          //
        },
      };
      provide(DIALOG_API_INJECTION_KEY, api);
      return () => <div class={["l-dialog-provider", {}]}></div>;
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
