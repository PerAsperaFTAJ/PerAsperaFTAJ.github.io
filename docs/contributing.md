# 贡献指南

## 贡献角色

- 团队成员：可在仓库内创建分支并提交 PR。
- 协作者：通过申请并被邀请后，可在仓库内创建分支并提交 PR。
- 非协作者：未被邀请前，可先提交申请 Issue。

## 投稿权限申请（一次性）

1. 提交申请 Issue：
<https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io/issues/new?template=wiki-change-request.yml>
2. 维护者评估后确认是否允许长期投稿。
3. 申请通过后，维护者邀请你为仓库协作者。
4. 接受邀请后，后续文章直接在主仓库开分支提 PR。

## 协作者投稿流程（默认）

1. 在主仓库创建分支。
2. 修改或新增文章内容。
3. 提交 PR，并使用 `.github/PULL_REQUEST_TEMPLATE.md` 填写说明。
4. 通过 `文档校验` 工作流（`validate` 检查）后，等待审批合并。

## 高风险改动规则

以下目录改动需要先提 Issue，再提交 PR：

- `docs/process/**`
- `docs/security/**`
- `.github/workflows/**`

## 非协作者的临时贡献（备用）

未被邀请为协作者时，仍可使用 Fork + PR 方式临时贡献。

## PR 要求

1. 使用 `.github/PULL_REQUEST_TEMPLATE.md` 填写变更说明。
2. 必须通过 `文档校验` 工作流（`validate` 检查）。
3. 必须获得 CODEOWNERS 审批后才能合并。

## 内容编写建议

- 一个 PR 只做一类改动，避免混合修改。
- 标题与目录保持清晰，方便后续检索。
- 对流程和权限相关改动，补充“风险与回滚方案”说明。
