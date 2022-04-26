import { ValidatorFn } from "./form-validator";

interface RuleRequired<T> {
  message?: string;
  type: "required";
  validator?: ValidatorFn<T>;
}
interface RuleMax {
  message?: string;
  type: "max";
  value: number;
}
interface RuleMaxLength {
  message?: string;
  type: "maxLength";
  value: number;
}
interface RuleMin {
  message?: string;
  type: "min";
  value: number;
}
interface RuleMinLength {
  message?: string;
  type: "minLength";
  value: number;
}
interface RulePattern {
  message?: string;
  type: "pattern";
  value: string;
}
interface RuleCustom<T> {
  key: string;
  message: string;
  type: "custom";
  validator: ValidatorFn<T>;
}

export type RuleString = RuleMaxLength | RuleMinLength | RulePattern | RuleRequired<string> | RuleCustom<number>;
export type RuleNumber = RuleMax | RuleMin | RuleRequired<number> | RuleCustom<string>;
export type Rule<T = any> = RuleRequired<T> | RuleCustom<T>;
