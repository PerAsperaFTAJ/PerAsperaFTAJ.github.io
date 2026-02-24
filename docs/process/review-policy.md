# 评审策略

## 分支保护建议

对 `main` 分支启用以下规则：

1. 启用 `Require a pull request before merging`（合并前必须走 PR）。
2. 启用 `Require approvals`（建议至少 1 人，关键目录建议 2 人）。
3. 启用 `Require status checks to pass`（至少包含 `validate` 检查）。
4. 启用 `Block force pushes`（禁止强推）。

## 协作者授权规则

1. 外部投稿者通过一次申请后，可被邀请为仓库协作者。
2. 协作者用于便捷投稿，不等同于可直接推送 `main`。
3. 协作者仍需走 PR 审核与状态检查。

## 前置 Issue 例外规则

以下高风险目录改动，要求先提 Issue 再提 PR：

- `docs/process/**`
- `docs/security/**`
- `.github/workflows/**`

## CODEOWNERS 范围

以下目录建议由固定责任人审批：

- `docs/process/**`
- `docs/security/**`
- `.github/workflows/**`

## PR 评审重点

1. 变更是否与关联 Issue 目标一致。
2. 是否破坏既有导航、链接或结构。
3. 是否引入安全风险或泄露敏感信息。
4. 是否具备明确回滚路径。
