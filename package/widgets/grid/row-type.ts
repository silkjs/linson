export interface RowProps {
  /**
   * 栅格间隔
   * @default 0
   */
  gutter?: number | [number, number];
}

export type RowProviderType = Pick<RowProps, "gutter">;
