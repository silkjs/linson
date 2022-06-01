# Doc

## 项目说明

```bash
├── .github # github相关配置
├── .husky # githook
├── .vscode # vscode 配置
├── app # 测试预览应用（vite+vue）
├── docs # 文档说明
├── package # 主目录
│   ├── common # 公用
│   ├── locales # 国际化
│   ├── utils # 工具包
│   └── widgets # 组件
├── scripts # 脚本
```

### 开发预览

1. 分别在 linson 和 linson/app 目录下安装依赖
1. 在 linson 目录下运行 dev 预设命令
1. 编辑 app 里的视图组件即可实时查看界面变化

### 本地调试

```bash
# 包根目录
npm link # 会在全局创建一个链接，指向我们创建的包。

# 项目根目录
npm link <package_name>

# 更新
npm unlink <package_name>
npm link <package_name>
```

### 其他预设命令

- dev 开发预览
- build 打包输出包文件
- rollup 组件库的编译
- typescript 类型文件的编译
- test 单元测试
- lint 脚本格式检查
- style 样式格式检查
- prettier 代码格式化

##   命名规范

- Pascal 帕斯卡命名法
- Camel 驼峰命名法
- Upper 大写命名法
- Kebab 串式命名法
- Snake 蛇形命名法

### Pascal

单个命名中，每个词都是以大写字母开始。

- OutOfMemoryException
- DateFormat
- DatabaseConnection
- LinkedList
- EventHandler

### Camel

单个命名中，首个词是以小写字母开头，后面每个词都是以大写字母开始。

- outOfMemoryException
- dateFormat
- databaseConnection
- linkedList
- eventHandler

### Upper

单个命名中，每个单词都是大写的，之间用连字符连接`_`。

- OUT_OF_MEMORY_EXCEPTION
- DATE_FORMAT
- DATABASE_CONNECTION
- LINKED_LIST
- EVENT_HANDLER

### Kebab

单个命名中，每个单词都是小写的，之间用连字符连接`-`。

- out-of-memory-exception
- date-format
- database-connection
- linked-list
- event-handler

### Snake

单个命名中，每个单词都是小写的，之间用连字符连接`_`。

- out_of_memory_exception
- date_format
- database_connection
- linked_list
- event_handler

## CSS 命名规则

类名由`[a-z]`、`-`、`--`、`_`组成
