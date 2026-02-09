# 开发命令参考

## 核心开发命令

```bash
# 启动开发服务器
npm run dev

# 生产构建（含类型检查）
npm run build

# 仅构建（不含类型检查）
npm run build-only

# 预览生产构建
npm run preview

# TypeScript 类型检查
npm run type-check
```

## 代码质量命令

```bash
# 运行所有 linter（oxlint + ESLint）
npm run lint

# 单独运行 oxlint（快速）
npm run lint:oxlint

# 单独运行 ESLint
npm run lint:eslint

# 代码格式化
npm run format
```

## 设置命令

```bash
# 首次安装依赖后自动运行
npm run prepare

# 安装 Husky Git 钩子
npm run husky:install

# 复制 ArcGIS 资源文件
npm run copy:arcgis-assets
```

## Shadcn Vue 命令

```bash
# 添加 Shadcn Vue UI 组件
npx shadcn-vue@latest add [component-name]

# 示例：添加 Button 组件
npx shadcn-vue@latest add button
```

## Linux 系统工具

```bash
# 查看目录内容
ls -la

# 查找文件
find . -name "*.ts"

# 搜索代码内容
grep -r "pattern" src/

# 切换目录
cd /path/to/dir

# Git 操作
git status
git add .
git commit -m "feat: description"
```
