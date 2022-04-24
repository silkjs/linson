import type { App, Plugin } from "vue";

export function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

type WidgetPlugin<T> = T & Plugin;

export function register<T>(app: App, name: string, widget: T) {
  if (!app.component(name)) {
    app.component(name, widget);
  }
}

export function withInstall<T extends { name: string }>(widget: T) {
  const component = widget as WidgetPlugin<T>;
  component.install = (app: App, name?: string) => {
    register(app, name ?? widget.name, widget);
  };
  return component;
}
