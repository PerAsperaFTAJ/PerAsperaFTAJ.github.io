# 开始使用

本项目是基于 GitHub Pages 的团队 Wiki，使用 VitePress 构建。

## 本地运行

```bash
npm install
npm run docs:dev
```

默认地址：`http://127.0.0.1:5173`

## 目录约定

- `docs/`：Wiki 内容。
- `docs/process/`：流程、评审和规范相关文档。
- `docs/security/`：安全、权限和风险相关文档。
- `.github/`：Issue 模板、PR 模板、Actions 工作流。

## 发布方式

- 所有 Pull Request 仅执行校验，不发布。
- 仅 `main` 分支合并后触发 GitHub Pages 自动部署。
- 发布地址使用仓库主页域名：`https://perasperaftaj.github.io/`
