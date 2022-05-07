import type { DefineComponent, InjectionKey, Slots } from "vue";

type FnContent = () => DefineComponent;

export function createInjectionKey<T>(key: string): InjectionKey<T> {
  return Symbol(key);
}

export function getContent<P extends Record<string, any>, S extends Slots>(
  props: P,
  slots: S,
  prop: keyof P,
  slot = "default"
): DefineComponent | null {
  const content = props[prop] ?? slots[slot];

  if (typeof content === "undefined") {
    return null;
  }
  if (typeof content === "function") {
    return (content as FnContent)();
  }
  return content;
}
