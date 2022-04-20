export interface ButtonProps {
  /**
   * 是否为块级元素
   * @default false
   */
  block?: boolean;
  /**
   * 是否禁用按钮
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否为幽灵按钮（镂空按钮）
   * @default false
   */
  ghost?: boolean;
  /**
   * 是否显示为加载状态
   * @default false
   */
  loading?: boolean;
  /**
   * 组件尺寸
   * @default medium
   */
  size?: "small" | "medium" | "large";
  /**
   * 组件风格，依次为默认色、品牌色、危险色、警告色、成功色
   */
  theme?: "default" | "primary" | "danger" | "warning" | "success";
  /**
   * 按钮类型
   * @default button
   */
  type?: "submit" | "reset" | "button";
}

export interface ButtonEmits {
  click: (e: MouseEvent) => void;
}
