# Per Aspera 团队 Wiki

GitHub Pages 团队 Wiki，支持投稿者申请通过后长期协作投稿。

## 技术栈

- VitePress
- Node.js 22 LTS
- GitHub Actions
- GitHub Pages

## 本地开发

```bash
npm install
npm run docs:dev
```

构建：

```bash
npm run docs:build
```

文档检查：

```bash
npm run lint:md
```

## 贡献流程

### 团队成员与协作者

1. 创建分支。
2. 提交 Pull Request。
3. 通过自动校验和必需审批。
4. 合并到 `main`。

说明：通过申请的外部投稿者会被邀请为仓库协作者，后续按同样流程投稿。

### 非协作者（首次申请）

1. 使用 `投稿权限申请` 模板提交申请 Issue。
2. 等待维护者确认。
3. 审核通过后，维护者邀请你成为协作者。
4. 接受邀请后，后续文章可直接在主仓库分支提交 PR。

### 仍需前置 Issue 的目录

以下高风险目录改动，仍需先开 Issue 再提交 PR：

- `docs/process/**`
- `docs/security/**`
- `.github/workflows/**`

## 持续集成与部署工作流

- `文档校验`：在指向 `main` 的 Pull Request 上运行，执行构建与 Markdown 检查。
- `部署 GitHub Pages`：在 `main` 分支 push 后运行，执行构建并发布到 Pages。

## 必要的 GitHub 仓库设置

1. Pages
   将 **Build and deployment** 的来源设置为 **GitHub Actions**。
2. `main` 分支保护
   启用必需 PR 审批和必需状态检查（`文档校验` 工作流中的 `validate` 检查）。
3. Actions 安全
   在公开仓库中启用“首次贡献者 workflow 审批”。
4. 仓库访问
   通过申请的长期投稿者建议加入仓库 `Collaborators`，方便持续投稿。
