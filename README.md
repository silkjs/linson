# 林森 Linson

A Vue 3 Component Library.

## 用例 Usage

安装 install

```bash
npm install @silkjs/linson
```

引用 import

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

模板模式 template mode

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

渲染函数模式 tsx mode

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

## 组件 Widgets

### 通用 General

- 按钮 Button
- 分割线 Divider
- 下拉菜单 Dropdown
- 图标 Icon

### 输入 Entry

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

### 布局 Layout

- 栅格 Grid
- 间距 Space

### 展示 Display

- 轮播图 Carousel
- 骨架屏 Skeleton
- 表格 Table
- 标签 Tag

### 反馈 Feedback

- 警告 Alert
- 对话框 Dialog
- 全局提示 Message
- 气泡确认框 Popconfirm
- 气泡卡片 Popover
- 文字提示 Tooltip

### 导航 Navigation

- 面包屑 Breadcrumb
- 导航菜单 Menu
- 分页 Pagination
- 步骤条 Steps
- 选项卡 Tabs
