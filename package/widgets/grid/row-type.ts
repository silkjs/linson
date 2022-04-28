import { createInjectionKey } from "../../utils/context";

export interface RowProps {
  /**
   * 栅格间隔
   * @default 0
   */
  gutter: number | [number, number];
}

export type RowInjection = Pick<RowProps, "gutter">;

export const ROW_INJECTION_KEY = createInjectionKey<RowInjection>("l-row");
