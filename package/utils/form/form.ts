import { ValidatorFn, Validators } from "./form-validator";

type FormType = FormControl | FormArray | FormGroup;

export class FormControl<T = any> {
  value: T | undefined = undefined;
  validators: ValidatorFn<T>[];
  constructor(value?: T, validators?: ValidatorFn<T>[]) {
    this.value = value;
    this.validators = validators ?? [];
  }
}
type FormArrayType = FormType[];
export class FormArray<T extends FormArrayType = FormArrayType> {
  array: T;
  constructor(...array: T) {
    this.array = array;
  }
}
interface FormGroupType {
  [name: string]: FormType;
}
export class FormGroup<T extends FormGroupType = FormGroupType> {
  group: T;
  constructor(group: T) {
    this.group = group;
  }
}

const group = new FormGroup({
  age: new FormControl<number>(undefined, [Validators.required(), Validators.min(0), Validators.max(200)]),
  bio: new FormControl<string>(undefined, [Validators.minLength(10), Validators.maxLength(200)]),
  birth: new FormControl<Date>(undefined, [Validators.required()]),
  edu: new FormGroup({
    name: new FormControl<string>(),
  }),
  phone: new FormControl<string>(undefined, [Validators.required(), Validators.pattern(/sdfd/)]),
  vision: new FormArray(
    new FormControl<number>(undefined, []),
    new FormControl<string>(undefined, []),
    new FormControl<Date>(undefined, [])
  ),
});
