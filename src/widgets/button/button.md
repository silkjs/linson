# 按钮 Button

按钮用于触发一个任务

## 使用 Usage

```tsx
<Button
  size="small"
  theme="primary"
  onClick={(e) => {
    e.preventDefault();
  }}
/>
```

## 参数 Props

| 名称     | 类型                                                           | 默认值  | 说明                       |
| -------- | -------------------------------------------------------------- | ------- | -------------------------- |
| block    | `boolean`                                                      | false   | 是否为块级元素             |
| disabled | `boolean`                                                      | false   | 是否禁用按钮               |
| ghost    | `boolean`                                                      | false   | 是否为幽灵按钮（镂空按钮） |
| loading  | `boolean`                                                      | false   | 是否显示为加载状态         |
| size     | `enum` ["small", "medium", "large" ]                           | medium  | 组件尺寸                   |
| theme    | `enum` ["default", "primary", "danger", "warning", "success" ] | default | 组件风格                   |
| type     | `enum` ["submit", "reset", "button" ]                          | button  | 按钮类型                   |

## 事件 Events

| 名称  | 类型                      | 说明     |
| ----- | ------------------------- | -------- |
| click | `(e: MouseEvent) => void` | 点击事件 |
