const Validators = {
  required: () => [false, ""],
  pattern: () => [false, ""],
  minLength: (minLength: number) => [false, ""],
  maxLength: (maxLength: number) => [false, ""],
};
