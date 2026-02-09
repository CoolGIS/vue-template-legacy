# Vue Template Legacy - 项目概述

## 项目目的

这是一个支持现代浏览器的 Vue 3 模板项目，使用 Vite + TypeScript 构建。项目作为启动模板，已配置最佳实践，适合作为新项目的基础。

## 技术栈

### 核心框架

- **Vue 3.5** - 仅使用 Composition API（已禁用 Options API）
- **Vue Router 5** - 路由管理
- **Pinia 3** - 状态管理
- **TypeScript 5.9** - 类型安全

### 构建工具

- **Vite 7.3** - 构建工具
- **PostCSS** - 样式处理（@tailwindcss/postcss, pxtorem）

### HTTP 与数据获取

- **ky** - 轻量级 HTTP 客户端
- **@tanstack/vue-query** - 服务端状态管理
- **zod** - Schema 验证

### UI 与样式

- **Tailwind CSS v4** - 原子化 CSS 框架（通过 @tailwindcss/postcss 集成）
- **postcss-pxtorem** - 响应式 px 转 rem（rootValue: 16）
- **Shadcn Vue** - 高质量可复用 UI 组件库（new-york 风格）
  - 图标库: lucide-vue-next
  - 底层依赖: reka-ui（无样式 Vue 组件原语）
  - CSS 变量主题系统（支持亮/暗模式切换）
  - 配置文件: `components.json`
- **tw-animate-css** - Tailwind 预设动画扩展（dev）

### 开发工具

- **oxlint + ESLint 9** - 双 Linter 架构
  - oxlint 配置: `.oxlintrc.json`
- **Prettier 3.8** - 代码格式化（使用 experimental-cli）
- **Husky + lint-staged** - Git 钩子
- **Commitlint** - 约定式提交

### 特殊依赖

- **@arcgis/core** - 2D/3D 地图组件
- **@vueuse/core** - Composition API 工具集
- **lodash-es** - 工具函数库
- **reka-ui** - 无样式 Vue 组件原语（Shadcn Vue 底层依赖）
- **lucide-vue-next** - 图标库（Shadcn Vue 默认图标库）
- **class-variance-authority** - 样式变体工具（CVA）
- **clsx** - 条件类名工具
- **tailwind-merge** - Tailwind 类名智能合并

## Node.js 版本要求

`^20.19.0 || >=22.12.0`
