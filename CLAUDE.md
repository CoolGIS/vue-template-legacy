# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个支持现代浏览器的 Vue 3 模板项目，使用 Vite + TypeScript 构建。项目采用 Composition API 和 `<script setup>` 语法。

**Node.js 版本要求**: `^20.19.0 || >=22.12.0`

## 开发命令

```bash
# 开发服务器
npm run dev

# 生产构建（含类型检查）
npm run build

# 仅构建（不含类型检查）
npm run build-only

# 预览生产构建
npm run preview

# TypeScript 类型检查
npm run type-check

# 代码检查（运行 oxlint 和 ESLint）
npm run lint

# 单独运行 oxlint（快速）
npm run lint:oxlint

# 单独运行 ESLint
npm run lint:eslint

# 代码格式化
npm run format
```

## 技术栈与架构

### 核心框架

- **Vue 3.5** - 仅使用 Composition API（已禁用 Options API: `__VUE_OPTIONS_API__: false`）
- **Vue Router 5** - 使用 Hash 模式 (`createWebHashHistory`)
- **Pinia 3** - 状态管理，推荐与 VueUse composables 结合使用
- **TypeScript 5.9** - 分离配置（tsconfig.app.json / tsconfig.node.json）

### HTTP 客户端与数据获取

项目采用 HTTP 客户端架构：

1. **ky** (`src/plugins/fetch/ky.ts`) - 基础 HTTP 客户端
   - 自动添加 Bearer Token（受保护路径）
   - 支持 Zod schema 验证
   - 自定义 `APIError` 错误类

2. **@tanstack/vue-query** (`src/plugins/tanstack-query.ts`) - 服务端状态管理
   - 全局错误处理（含 401 处理）
   - Mutation 支持 meta 消息配置

3. **zod** - Schema 验证库

### 构建系统

- **Vite 7.3** - 构建工具
  - 路径别名: `@` → `./src`
  - Bundle 分析器: `vite-bundle-analyzer`

### 样式方案

- **Tailwind CSS v4** - 原子化 CSS 框架
  - 使用 PostCSS 插件: `@tailwindcss/postcss`
  - 通过 `@import 'tailwindcss'` 引入
  - Prettier 集成: `prettier-plugin-tailwindcss` 类名排序
- **PostCSS**
  - `postcss-pxtorem`: px 转 rem（rootValue: 16，最小 2px）

### 代码质量

- **双 Linter 架构**:
  - `oxlint`: 快速 correctness 检查（配置文件: `.oxlintrc.json`）
  - `ESLint 9`: 完整 Vue/TS 规则
- **Prettier 3.8** - 新架构 (experimental-cli)
- **Husky + lint-staged** - Pre-commit 钩子
- **Commitlint** - 约定式提交规范

### 特殊依赖

- **@arcgis/core** - 3D 地图组件（运行 `npm run copy:arcgis-assets` 复制资源）
- **@vueuse/core** - Composition API 工具集
- **lodash-es** - 工具函数库

## 项目结构

```
src/
├── plugins/           # Vue 插件配置
│   ├── fetch/        # HTTP 客户端设置
│   ├── tanstack-query.ts
│   └── arcgis.ts
├── router/           # Vue Router 配置
├── stores/           # Pinia stores
├── composables/      # 组合式函数
├── components/
│   ├── _base/        # 基础组件 (BaseLoadingIndicator, BaseErrorBlock)
│   ├── _transition/  # 过渡组件 (Fade, Zoom)
│   └── _transition/group/  # 组过渡
├── views/            # 路由页面组件
├── assets/           # 静态资源
├── apis/             # API 相关
└── utils/            # 工具函数
```

## 重要约定

### 组件风格

- **必须使用** Composition API + `<script setup lang="ts">`
- **禁止使用** Options API（已全局禁用）
- 组件统一使用 Vue 单文件组件（`.vue`）

### 路由模式

- 使用 Hash 模式 (`createWebHashHistory`)
- 路由配置在 `src/router/index.ts`

### 状态管理

- Pinia stores 使用 setup 语法模式
- 优先复用 VueUse composables（如 `useCounter`）

### HTTP 请求

- 受保护路径自动添加 Authorization header
- 通过 `zodSchema` 选项进行响应数据验证
- 使用 TanStack Query 管理服务端状态

### 样式

- 优先使用 Tailwind CSS 原子化类
- 自动 px 转 rem（最小 2px）

### 提交规范

遵循 Conventional Commits：

- `feat:` 新功能
- `fix:` 修复
- `refactor:` 重构
- `build:` 构建
- 等...

## Lint 配置说明

ESLint 配置使用 ESLint 9 Flat Config，包含：

- Vue essential 规则
- TypeScript 推荐规则
- oxlint 推荐规则
- 跳过格式化规则（使用 `eslint-config-prettier/flat`）

忽略路径：

- `dist`, `dist-ssr`, `coverage`
- `public/arcgis/**`（第三方资源）

oxlint 配置文件：`.oxlintrc.json`

- 插件: eslint, typescript, unicorn, oxc, vue
- 类别: correctness (error级别)
