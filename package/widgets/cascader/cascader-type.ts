import { LNode, LPlacement, LSize, LStatus } from "../../common/linson-type";

export interface CascaderOption<T extends string | number> {
  label: string;
  value: T;
  disabled?: boolean;
  children?: CascaderOption<T>[];
}

export interface CascaderProps<T extends string | number = string | number> {
  disabled?: boolean;
  options?: CascaderOption<T>[];
  placeement?: LPlacement;
  placeholder?: string;
  readonly?: boolean;
  size?: LSize;
  status?: LStatus;
  value?: string | number | Array<string | number>;
}

export interface CascaderEmits {
  blur: () => void;
  focus: () => void;
  "update:show": (value: boolean) => void;
  "update:value": (value: any) => void;
}
