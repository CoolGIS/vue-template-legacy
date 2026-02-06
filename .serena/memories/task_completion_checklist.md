# 任务完成检查清单

## 代码修改后必须执行

### 1. 类型检查

```bash
npm run type-check
```

### 2. 代码检查

```bash
npm run lint
```

此命令会同时运行：

- `oxlint` - 快速 correctness 检查
- `ESLint` - 完整 Vue/TS 规则检查

### 3. 代码格式化（如需要）

```bash
npm run format
```

## 提交前检查

### Git 状态

```bash
git status
```

### 自动化检查

Pre-commit 钩子会自动运行 `lint-staged`，确保：

- 修改的文件已通过 lint
- 代码格式符合 Prettier 规范

### 提交信息

遵循 Conventional Commits 格式：

```
feat: 添加新功能描述
fix: 修复问题描述
refactor: 重构描述
build: 构建相关
chore: 杂项
docs: 文档更新
```

## 完成任务后建议

1. **构建验证**（重要改动）

```bash
npm run build
```

2. **预览构建**（验证生产版本）

```bash
npm run build-only
npm run preview
```

## 注意事项

- 组件开发必须使用 Composition API + `<script setup>`
