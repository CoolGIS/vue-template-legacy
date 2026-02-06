# 代码风格与约定

## Vue 组件规范

### 必须使用 Composition API

- **禁用**: Options API（已全局配置 `__VUE_OPTIONS_API__: false`）
- **必须**: 使用 `<script setup lang="ts">` 语法
- **统一**: 组件使用 Vue 单文件组件（`.vue`）

## 目录结构约定

```
src/
├── plugins/           # Vue 插件配置
│   ├── fetch/        # HTTP 客户端
│   ├── tanstack-query.ts
│   └── arcgis.ts
├── router/           # 路由配置
├── stores/           # Pinia stores
├── composables/      # 组合式函数
├── components/
│   ├── _base/        # 基础组件
│   └── _transition/  # 过渡组件
├── views/            # 路由页面
├── assets/           # 静态资源
├── apis/             # API 定义
└── utils/            # 工具函数
```

### 组件分类

- `_base/` - 基础通用组件（BaseLoadingIndicator, BaseErrorBlock）
- `_transition/` - 过渡动画组件（Fade, Zoom）
- 其他 - 功能组件

## HTTP 请求约定

### ky 客户端 (src/plugins/fetch/ky.ts)

- 受保护路径自动添加 `Authorization: Bearer {token}` header
- 使用 `zodSchema` 选项进行响应数据验证
- 自定义 `APIError` 错误类

### TanStack Query

- 全局错误处理（含 401 处理）
- Mutation 支持 `meta.successMessage` 和 `meta.errorMessage`

## 路由约定

- 使用 Hash 模式 (`createWebHashHistory`)
- 路由配置位于 `src/router/index.ts`
- 404 页面使用通配符路由 `/:pathMatch(.*)*`

## 状态管理约定

- Pinia stores 使用 setup 语法模式
- 优先复用 VueUse composables（如 `useCounter`）

## 样式约定

- 优先使用 Tailwind CSS v4 原子化类
- 自动 px 转 rem（rootValue: 16, minPixelValue: 2）

### 自定义 Utilities (src/assets/main.css)

项目中定义了以下自定义布局工具类：

- `hstack` - 水平布局：`flex items-center`
- `vstack` - 垂直布局：`flex flex-col items-center`
- `center` - 居中布局：`flex items-center justify-center`

### 响应式字体

根元素使用响应式字体大小：`clamp(12px, calc(100vw / 120), 24px)`

## Git 提交规范

遵循 Conventional Commits：

- `feat:` 新功能
- `fix:` 修复
- `refactor:` 重构
- `build:` 构建相关
- `chore:` 杂项
- `docs:` 文档

## Lint 配置

- ESLint 9 Flat Config
- Vue essential + TypeScript 推荐规则
- oxlint correctness 规则（配置文件: `.oxlintrc.json`）
- Prettier 独立处理格式化（使用 `eslint-config-prettier/flat`）

忽略路径：

- `dist`, `dist-ssr`, `coverage`
- `public/arcgis/**`（第三方资源）
