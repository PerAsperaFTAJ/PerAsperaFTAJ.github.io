# Repository Guidelines

## Project Structure & Module Organization

This repository is a VitePress-based documentation site.

- `docs/`: source Markdown content (`index.md`, `getting-started.md`, `contributing.md`).
- `docs/process/` and `docs/security/`: policy and security docs (treated as high-risk paths).
- `docs/.vitepress/config.mts`: site config (nav, sidebar, theme settings).
- `.github/workflows/`: CI and deployment workflows.

Do not hand-edit generated output in `docs/.vitepress/dist/`; rebuild instead.

## Build, Test, and Development Commands

- `npm install`: install dependencies (CI uses Node.js 22).
- `npm run docs:dev`: run local docs server on `http://0.0.0.0:5173`.
- `npm run docs:build`: build static site into `docs/.vitepress/dist`.
- `npm run docs:preview`: preview the production build on port `4173`.
- `npm run lint:md`: run Markdown lint checks (`markdownlint-cli2`).

Typical local validation:

```bash
npm run docs:build && npm run lint:md
```

## Coding Style & Naming Conventions

- Use clear, concise Markdown with one `#` title per file.
- Prefer lowercase kebab-case file names (for example, `review-policy.md`).
- Keep links relative to `docs/` paths and verify sidebar/nav entries when adding pages.
- Use 2-space indentation in YAML/TS config files; keep TypeScript style consistent with `docs/.vitepress/config.mts`.

## Testing Guidelines

There is no separate unit test suite; quality gates are build and lint.

- Run `npm run docs:build` before opening a PR.
- Run `npm run lint:md` for all Markdown changes.
- Manually check changed pages in local preview, including links and navigation.

## Commit & Pull Request Guidelines

- Follow Conventional Commit prefixes used in history (for example, `feat: ...`, `fix: ...`).
- Keep each commit and PR focused on one change type.
- Complete `.github/PULL_REQUEST_TEMPLATE.md`, including validation and rollback notes.
- PRs targeting `main` must pass the `文档校验` workflow (`validate` job) and receive CODEOWNERS approval.
- Changes under `docs/process/**`, `docs/security/**`, or `.github/workflows/**` require a linked issue before PR.

## Security & Configuration Tips

- Match CI locally with Node.js `>=22`.
- For workflow edits, confirm both validation (`.github/workflows/ci.yml`) and deployment (`.github/workflows/deploy-pages.yml`) still align with the VitePress output path.
