# Linson

A Vue 3 Component Library.

English | [简体中文](./README.zh-CN.md)

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

## Features

- An enterprise-class UI design system for desktop applications.
- A set of high-quality Vue components out of the box.

## Usage

install

```bash
npm install @silkjs/linson
```

import

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

template mode

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

tsx mode

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

## Widgets

### General

- Button
- Divider
- Dropdown
- Icon

### Entry

- Cascader
- Checkbox
- DatePicker
- Form
- Input
- InputNumber
- Radio
- Select
- Switch
- TimePicker
- Upload

### Layout

- Grid
- Space

### Display

- Carousel
- Skeleton
- Table
- Tag

### Feedback

- Alert
- Dialog
- Message
- Popconfirm
- Popover
- Tooltip

### Navigation

- Breadcrumb
- Menu
- Pagination
- Steps
- Tabs
