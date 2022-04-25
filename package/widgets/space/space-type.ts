import { LNode } from "../../common/linson-type";

export interface SpaceProps {
  /**
   * 间距大小
   * @default middle
   */
  size?: "small" | "middle" | "large" | number;

  /**
   * 间距方向
   * @default horizontal
   */
  direction?: "vertical" | "horizontal";
}

export interface SpaceEmits {}
