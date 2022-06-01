import { LNode, LSize } from "../../common/linson-type";
import { createInjectionKey } from "../../utils/context";

export interface TabsProps {
  value: string;
  size: LSize;
  placement: "left" | "top" | "bottom" | "right";
}

export interface TabsEmits {
  "update:value": (value: string) => void;
}

export interface TabPaneProps {
  name: string;
  tab: LNode;
}

export interface TabPaneEmits {}

export interface MessageProviderEmits {}

export interface TabsApiInjection {
  active: string;
}

export const TABS_API_INJECTION_KEY = createInjectionKey<TabsApiInjection>("l-tabs-api");
