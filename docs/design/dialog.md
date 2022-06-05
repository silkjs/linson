# Dialog

dialog 主分有两种使用模式，一种是在业务模版界面里定义好并实例化，再通过改变受控 show 值来显示或隐藏 dialog 内容。另一种
是通过函数调用，“动态”的创建 dialog。

## function

```typescript
const dialog = useDialog();
dialog.create({
  title: "这是没有名字的标题",
  content: ContentComponent,
});
```
