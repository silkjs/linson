import type { DefineComponent, InjectionKey, Slots } from "vue";

export function createInjectionKey<T>(key: string): InjectionKey<T> {
  return Symbol(key);
}

export function getContent<P extends Record<string, any>, S extends Slots>(
  props: P,
  slots: S,
  prop: keyof P,
  slot = "default"
): DefineComponent {
  const content = props[prop];
  return typeof content === "undefined" ? slots[slot]?.() : typeof content === "function" ? content() : content;
}
