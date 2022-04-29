import { LNode } from "../../common/linson-type";

export interface ButtonProps {
  /**
   * 是否为块级元素
   * @default false
   */
  block: boolean;

  /**
   * 按钮内容
   */
  content: string | object | LNode;

  /**
   * 是否禁用按钮
   * @default false
   */
  disabled: boolean;

  /**
   * 是否为幽灵按钮（镂空按钮）
   * @default false
   */
  ghost: boolean;

  /**
   * 是否显示为加载状态
   * @default false
   */
  loading: boolean;

  /**
   * 组件尺寸
   * @default medium
   */
  size: "small" | "medium" | "large";

  /**
   * 组件风格，依次为默认色、品牌色、危险色、警告色、成功色
   * @default default
   */
  theme: "default" | "primary" | "error" | "warning" | "success";

  /**
   * 按钮类型
   * @default button
   */
  type: "submit" | "reset" | "button";

  /**
   * 按钮形式，基础、线框、虚线、文字
   * @default base
   */
  variant: "base" | "outline" | "dashed" | "text";
}

export interface ButtonEmits {
  click: (e: MouseEvent) => void;
}
