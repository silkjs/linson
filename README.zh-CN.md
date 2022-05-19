# 林森

A Vue 3 Component Library.

[English](./README.md) | 简体中文

[![Action](https://img.shields.io/github/workflow/status/silkjs/linson/main-action)](https://github.com/silkjs/linson/actions)
[![Issues](https://img.shields.io/github/issues-raw/silkjs/linson)](https://github.com/silkjs/linson/issues)
[![License](https://img.shields.io/github/license/silkjs/linson)](https://github.com/silkjs/linson/blob/main/LICENSE)
[![Package](https://img.shields.io/npm/v/@silkjs/linson)](https://www.npmjs.com/package/@silkjs/linson)
[![Coverage Status](https://img.shields.io/coveralls/github/silkjs/linson)](https://coveralls.io/github/silkjs/linson)

![Tag](https://img.shields.io/github/tag/silkjs/linson.svg)
![Pull Request](https://img.shields.io/github/issues-pr/silkjs/linson.svg)
![Release](https://img.shields.io/github/release/silkjs/linson.svg)
![Languages Top](https://img.shields.io/github/languages/top/silkjs/linson.svg)
![Code Size](https://img.shields.io/github/languages/code-size/silkjs/linson.svg)
![Last Commit](https://img.shields.io/github/last-commit/silkjs/linson.svg)

## 特点

- Linson UI 使用 TypeScript 编写，提供强大的类型支持，使编码过程丝般顺滑。
- 组件支持 treeshaking，无需第三方插件即可按需引用。
- 支持暗黑模式，主题可自由定制，紧跟 CSS 标准，通过更改 CSS 变量即可实现百变主题。
- 同时支持模板模式和渲染函数模式的使用，并对渲染函数模式做了优化，更贴合声明式编程

## 设计资源

- [桌面端](https://mastergo.com/file/60302553924982?source=link_share)
- 移动端（筹划中）

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

### 设置

- 配置 ConfigProvider

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

- 卡片 Card
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
