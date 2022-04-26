import { LNode } from "../../common/linson-type";

export interface SpaceProps {
  /**
   * 间距方向
   * @default horizontal
   */
  direction?: "vertical" | "horizontal";
  /**
   * 间距大小
   * @default middle
   */
  size?: "small" | "middle" | "large" | number;
}

export interface SpaceEmits {}
