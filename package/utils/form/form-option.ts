import { Rule } from "./form-rule";

type ControlOption = FormControlOption | FormArrayOption | FormGroupOption;

type FormControlOption = {
  rules: Rule[];
};
type FormArrayOption = ControlOption[];
type FormGroupOption = {
  [field: string]: ControlOption;
};
const form: FormGroupOption = {
  age: {
    rules: [
      { message: "", type: "required" },
      { message: "", type: "min", value: 0 },
      { message: "", type: "max", value: 200 },
    ],
  },
  bio: {
    rules: [
      { message: "", type: "required" },
      { message: "", type: "minLength", value: 10 },
      { message: "", type: "maxLength", value: 200 },
      { message: "", type: "pattern", value: "/sdfd/" },
    ],
  },
  edu: [
    {
      rules: [
        { message: "", type: "required" },
        { message: "", type: "min", value: 0 },
        { message: "", type: "max", value: 200 },
      ],
    },
  ],
  // vision: {
  //   name: {
  //     rules: [
  //       { message: "", type: "required" },
  //       { message: "", type: "custom", validator: (value: Date) => true },
  //     ],
  //   },
  // },
};

export const sf = form.ads;
