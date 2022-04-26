import { Form, FormArray, FormControl, FormGroup, FormItem, Validators } from "./widgets/form";

function App() {
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

  return (
    <Form group={group}>
      <FormItem name="age"></FormItem>
      <FormItem name="bio"></FormItem>
      <FormItem name="birth"></FormItem>

      <FormItem name="phone"></FormItem>
    </Form>
  );
}
