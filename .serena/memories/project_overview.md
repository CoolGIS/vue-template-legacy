# Vue Template Legacy - 项目概述

## 项目目的

这是一个支持旧版浏览器的 Vue 3 模板项目，使用 Vite + TypeScript 构建。项目作为启动模板，已配置最佳实践，适合作为新项目的基础。

## 技术栈

### 核心框架

- **Vue 3.5** - 仅使用 Composition API（已禁用 Options API）
- **Vue Router 5** - 路由管理
- **Pinia 3** - 状态管理
- **TypeScript 5.9** - 类型安全

### 构建工具

- **Vite 7.2** - 构建工具
- **PostCSS** - 样式处理（pxtorem, preset-env）

### HTTP 与数据获取

- **ky** - 轻量级 HTTP 客户端
- **@tanstack/vue-query** - 服务端状态管理
- **zod** - Schema 验证

### UI 与样式

- **Element Plus 2.13** - Vue 3 UI 组件库（通过 unplugin-element-plus 自动按需导入组件样式）
- **postcss-pxtorem** - 响应式 px 转 rem

### 开发工具

- **oxlint + ESLint 9** - 双 Linter 架构
  - oxlint 配置: `.oxlintrc.json`
- **Prettier 3.8** - 代码格式化（使用 experimental-cli）
- **Husky + lint-staged** - Git 钩子
- **Commitlint** - 约定式提交

### 特殊依赖

- **@arcgis/core** - 2D/3D 地图组件
- **@vueuse/core** - Composition API 工具集
- **element-plus** - UI 组件库
- **lodash-es** - 工具函数库

## Node.js 版本要求

`^20.19.0 || >=22.12.0`
