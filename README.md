# Linson

A Vue 3 Component Library.

English | [简体中文](./README.zh-CN.md)

[![Action](https://img.shields.io/github/workflow/status/silkjs/linson/main-action)](https://github.com/silkjs/linson/actions)
[![Issues](https://img.shields.io/github/issues-raw/silkjs/linson)](https://github.com/silkjs/linson/issues)
[![License](https://img.shields.io/github/license/silkjs/linson)](https://github.com/silkjs/linson/blob/main/LICENSE)
[![Package](https://img.shields.io/npm/v/@silkjs/linson)](https://www.npmjs.com/package/@silkjs/linson)
[![Coverage Status](https://img.shields.io/coveralls/github/silkjs/linson)](https://coveralls.io/github/silkjs/linson)

[![Tag](https://img.shields.io/github/tag/silkjs/linson.svg)](#)
[![Pull Request](https://img.shields.io/github/issues-pr/silkjs/linson.svg)](#)
[![Release](https://img.shields.io/github/release/silkjs/linson.svg)](#)
[![Languages Top](https://img.shields.io/github/languages/top/silkjs/linson.svg)](#)
[![Code Size](https://img.shields.io/github/languages/code-size/silkjs/linson.svg)](#)
[![Last Commit](https://img.shields.io/github/last-commit/silkjs/linson.svg)](#)

## Features

- Linson UI is written in TypeScript, providing powerful type support for silky-smooth coding.
- Components support treeshaking and can be referenced on-demand without third-party plugins.
- Dark mode is supported, and the theme is freely customizable, following CSS standards and changing CSS variables to achieve a hundred different themes.
- Support both template mode and rendering function mode, and do optimization for rendering function mode, more suitable for declarative programming.

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

render-function mode

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

### Setting

- ConfigProvider

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

- Card
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
