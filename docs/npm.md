# NPM

## 本地调试

```bash
# 包根目录
npm link # 会在全局创建一个链接，指向我们创建的包。

# 项目根目录
npm link <package_name>

# 更新
npm unlink <package_name>
npm link <package_name>
```
