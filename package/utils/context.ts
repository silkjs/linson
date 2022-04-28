import { InjectionKey } from "vue";

export function createInjectionKey<T>(key: string): InjectionKey<T> {
  return Symbol(key);
}
