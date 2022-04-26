import { FormControl } from "./form";

export interface ValidationErrors {
  [key: string]: string;
}

export interface ValidatorFn<T> {
  (control: FormControl<T>, errors: ValidationErrors, skip?: boolean): boolean;
}
export interface ValidatorCustomFn<T> {
  (control: FormControl<T>): boolean;
}

export class Validators {
  static required(message?: string): ValidatorFn<any> {
    return (control, errors, skip) => {
      if (typeof control.value === "undefined") {
        if (!skip) {
          errors["required"] = message ?? "此项必填";
        }

        return false;
      }
      return true;
    };
  }

  static max(max: number, message?: string): ValidatorFn<number> {
    return (control, errors) => {
      if (Validators.required()(control, errors, true) && max < control.value!) {
        errors["max"] = message ?? `数值不大于${max}`;
        return false;
      }
      return true;
    };
  }

  static maxLength(maxLength: number, message?: string): ValidatorFn<string> {
    return (control, errors) => {
      if (Validators.required()(control, errors, true) && maxLength < control.value!.length) {
        errors["maxLength"] = message ?? `字符串长度不大于${maxLength}`;
        return false;
      }
      return true;
    };
  }

  static min(min: number, message?: string): ValidatorFn<number> {
    return (control, errors) => {
      if (Validators.required()(control, errors, true) && min > control.value!) {
        errors["min"] = message ?? `数值不小于${min}`;
        return false;
      }
      return true;
    };
  }

  static minLength(minLength: number, message?: string): ValidatorFn<string> {
    return (control, errors) => {
      if (Validators.required()(control, errors, true) && minLength > control.value!.length) {
        errors["minLength"] = message ?? `字符串长度不小于${minLength}`;
        return false;
      }
      return true;
    };
  }

  static pattern(pattern: RegExp, message?: string): ValidatorFn<string> {
    return (control, errors) => {
      if (Validators.required()(control, errors, true) && !pattern.test(control.value!)) {
        errors["pattern"] = message ?? "请输入符合规范的值";
        return false;
      }
      return true;
    };
  }

  static custom<T>(fn: ValidatorCustomFn<T>, error: { key: string; message: string }): ValidatorFn<T> {
    return (control, errors) => {
      if (Validators.required()(control, errors, true) && !fn(control)) {
        errors[error.key] = error.message;
        return false;
      }
      return true;
    };
  }
}
