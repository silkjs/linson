# 林森

A Vue 3 Component Library.

[English](./README.md) | 简体中文

<div>
    <p>
      <a href="https://github.com/silkjs/linson/actions"><img src="https://img.shields.io/github/workflow/status/silkjs/linson/main-action" alt="action"></a>
      <a href="https://github.com/silkjs/linson/issues"><img src="https://img.shields.io/github/issues-raw/silkjs/linson" alt="issues"></a>
      <a href="https://github.com/silkjs/linson/blob/main/LICENSE"><img src="https://img.shields.io/github/license/silkjs/linson" alt="license"></a>
      <a href="https://www.npmjs.com/package/@silkjs/linson"><img src="https://img.shields.io/npm/v/@silkjs/linson" alt="package"></a>
      <a href="https://codecov.io/gh/silkjs/linson"><img src="https://img.shields.io/codecov/c/github/silkjs/linson" alt="Coverage Status" /></a>
      <br>
      <a href="javascript:void();"><img src="https://img.shields.io/github/tag/silkjs/linson" alt="tag"></a>
      <a href="javascript:void();"><img src="https://img.shields.io/github/issues-pr/silkjs/linson" alt="pr"></a>
      <a href="javascript:void();"><img src="https://img.shields.io/github/release/silkjs/linson" alt="release"></a>
      <a href="javascript:void();"><img src="https://img.shields.io/github/languages/top/silkjs/linson" alt="languages"></a>
      <a href="javascript:void();"><img src="https://img.shields.io/github/languages/code-size/silkjs/linson" alt="size"></a>
      <a href="javascript:void();"><img src="https://img.shields.io/github/last-commit/silkjs/linson" alt="commit"></a>
    </p>
</div>

## 特点

- An enterprise-class UI design system for desktop applications.
- A set of high-quality Vue components out of the box.

## 用例

安装

```bash
npm install @silkjs/linson
```

引用

```typescript
// style
import "@silkjs/linson/dist/linson.css";

// global use
import { Linson } from "@silkjs/linson";
app.use(Linson);

// or
import { Button } from "@silkjs/linson";
app.use(Button);
```

模板模式

```html
<template>
  <l-row :gutter="[16, 16]">
    <l-col :span="6"><l-button theme="default">Default</l-button></l-col>
    <l-col :span="6"><l-button theme="primary">Primary</l-button></l-col>
    <l-col :span="6"><l-button theme="warning">Warning</l-button></l-col>
    <l-col :span="6"><l-button theme="error">Error</l-button></l-col>
    <l-col :span="6"><l-button theme="success">Success</l-button></l-col>
  </l-row>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {},
  });
</script>
```

渲染函数模式

```typescript
import { defineComponent } from "vue";
import { Button, Row, Col } from "@silkjs/linson";

defineComponent({
  setup() {
    return () => (
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Button theme="default">Default</Button>
        </Col>
        <Col span={6}>
          <Button theme="primary">Primary</Button>
        </Col>
        <Col span={6}>
          <Button theme="warning">Warning</Button>
        </Col>
        <Col span={6}>
          <Button theme="error">Error</Button>
        </Col>
        <Col span={6}>
          <Button theme="success">Success</Button>
        </Col>
      </Row>
    );
  },
});
```

## 组件

### 通用

- 按钮 Button
- 分割线 Divider
- 下拉菜单 Dropdown
- 图标 Icon

### 输入

- 级联选择器 Cascader
- 复选框 Checkbox
- 日期选择器 DatePicker
- 表单 Form
- 输入框 Input
- 数字输入框 InputNumber
- 单选框 Radio
- 选择器 Select
- 开关 Switch
- 时间选择器 TimePicker
- 上传 Upload

### 布局

- 栅格 Grid
- 间距 Space

### 展示

- 轮播图 Carousel
- 骨架屏 Skeleton
- 表格 Table
- 标签 Tag

### 反馈

- 警告 Alert
- 对话框 Dialog
- 全局提示 Message
- 气泡确认框 Popconfirm
- 气泡卡片 Popover
- 文字提示 Tooltip

### 导航

- 面包屑 Breadcrumb
- 导航菜单 Menu
- 分页 Pagination
- 步骤条 Steps
- 选项卡 Tabs
