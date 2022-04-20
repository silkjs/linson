export class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayHello(to: string) {
    return `Hello ${to}, My name is ${this.name}`;
  }
}
