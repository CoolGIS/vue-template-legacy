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

### 配置文件

- **components.json** - Shadcn Vue 配置
  - 定义组件、工具函数、composables 的路径别名
  - 配置 Tailwind CSS 集成和图标库

### 样式方案

- **Tailwind CSS v4** - 原子化 CSS 框架
  - 使用 PostCSS 插件: `@tailwindcss/postcss`
  - 通过 `@import 'tailwindcss'` 引入
  - Prettier 集成: `prettier-plugin-tailwindcss` 类名排序
- **PostCSS**
  - `postcss-pxtorem`: px 转 rem（rootValue: 16，最小 2px）
- **Shadcn Vue** - 高质量可复用 UI 组件库
  - 风格: new-york
  - 图标库: lucide-vue-next
  - 使用 `reka-ui` 作为无样式组件基础
  - CSS 变量主题系统（支持亮/暗模式切换）
- **tw-animate-css** - Tailwind 预设动画扩展

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
- **reka-ui** - 无样式 Vue 组件原语（Shadcn Vue 底层依赖）
- **lucide-vue-next** - 图标库（Shadcn Vue 默认图标库）
- **class-variance-authority** - 样式变体工具（CVA）
- **clsx** - 条件类名工具
- **tailwind-merge** - Tailwind 类名智能合并

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
├── lib/              # 工具库
│   └── utils.ts      # cn() 类名合并函数
├── components/
│   ├── _base/        # 基础组件 (BaseLoadingIndicator, BaseErrorBlock)
│   ├── _transition/  # 过渡组件 (Fade, Zoom)
│   ├── _transition/group/  # 组过渡
│   └── ui/           # Shadcn Vue UI 组件
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

### 自定义 Utilities (src/assets/main.css)

项目中定义了以下自定义布局工具类：

- `hstack` - 水平布局：`flex items-center`
- `vstack` - 垂直布局：`flex flex-col items-center`
- `center` - 居中布局：`flex items-center justify-center`

### Shadcn Vue 工具函数

`src/lib/utils.ts` 提供了 `cn()` 函数，用于智能合并 Tailwind CSS 类名：

```ts
import { cn } from '@/lib'

cn('px-2 py-1', 'px-4') // 自动去重: 'py-1 px-4'
cn('base-class', isActive && 'active-class') // 支持条件类名
```

该函数结合 `clsx`（条件类名）和 `tailwind-merge`（智能去重），是 Shadcn Vue 组件的核心工具。

### Shadcn Vue 组件

项目集成了 Shadcn Vue 组件库，提供高质量的可复用 UI 组件：

- 组件位于 `src/components/ui/` 目录
- 通过 `components.json` 配置（new-york 风格）
- 使用 `lucide-vue-next` 图标库
- CSS 变量驱动的主题系统（支持 `.dark` 类切换暗色模式）

添加新组件：

```bash
npx shadcn-vue@latest add [component-name]
```

### 响应式字体

根元素使用响应式字体大小：`clamp(12px, calc(100vw / 120), 24px)`

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
