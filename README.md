# Linson

A Vue 3 Component Library.

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
