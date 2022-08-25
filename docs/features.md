# Features

- 多主题支持（UI 风格）
- style 的按需加载

## CSS

### 元素的几种状态

- visited
- focus
- hover
- active

### CSS 模块化

- SCSS 类预处理
- CSS in JS

## Template

Vue 中可以通过 slot 和 props 专递自定义 template，其中 slot 分为模板模式和函数模式，模版模式支持字符串、标签、函数类型的 template，函数模式支持只支持函数类型的 template（由于渲染性能，不推荐使用其他类型的 template）。props 传递 template 主要应用在函数模式上，这种组件专递模式与 React 模式更像。

## 功能实现

### Icon

Icon 的几种实现方案：图片、雪碧图（精灵图）、iconfont、svg

- icon resource [xicons](https://www.xicons.org/)

### 浮动层的现实和隐藏

涉及到浮动层的组件有复杂浮动 Dropdown、Cascader、DatePicker、Select、TimePicker、ContextMenu、Popconfirm、Popover、Tooltip 和简单浮动 Dialog、Message

其中主要包含如下问题：

- 浮动层的显示与隐藏事件如何触发
  - 显示：锚点 hover、click
  - 隐藏
- 浮动层出现的位置如何计算
  - getBoundingClientRect 获取锚点的浮动内容的尺寸位置数据
  - pageYOffset 获取视窗偏移量

### 表单系统

- 模式：响应式表单、模板驱动表单
- 错误提示方式
  - 提示信息占位，有错误在占位处显示
  - 提示信息不占位，有错误扩展占位并显示信息
  - 提示信息不占位，有错误仅变化输入框状态，错误消息集中展示
