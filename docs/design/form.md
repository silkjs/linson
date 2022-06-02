# Form

## Validators

| 类别      | 类型          |          |
| --------- | ------------- | -------- |
| required  | number,string | 必填     |
| max       | number        | 最大值   |
| min       | number        | 最小值   |
| maxLength | string        | 最大长度 |
| minLength | string        | 最小长度 |
| pattern   | string        | 正则匹配 |

## Forms

- AbstractControl
- FormControl
- FormGroup
- FormArray

### FormControl

```typescript
interface IAbstractControl {
  new (rules: Rule[]);
  value: any;
  parent: FormGroup | FormArray | null;
  status: any;
  valid: boolean;
  disabled: boolean;
  pristine: boolean;
  dirty: boolean;
  touched: boolean;
  untouched: boolean;
}

interface IFormControl<T> extends IAbstractControl {
  errors: Record<RuleKey, string>;
  new (value: T | null, rules: Rule[]);
  reset(): void;
}
```
