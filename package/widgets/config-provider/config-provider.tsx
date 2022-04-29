import { type PropType, defineComponent, inject, provide } from "vue";
import { enUS } from "../../locales";
import { withInstall } from "../../utils/common";
import { ConfigProviderEmits, ConfigProviderProps } from "./config-provider-type";

const emits: ConfigProviderEmits = {};

export const ConfigProvider = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-config-provider",
    props: {
      locale: {
        default: (): ConfigProviderProps["locale"] => enUS,
        type: Object as PropType<ConfigProviderProps["locale"]>,
      },
    },
    setup(props, { slots }) {
      return () => slots.default?.();
    },
  })
);
