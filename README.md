# 话说三遍淡如水

kream 的个人技术博客。使用 [AstroPaper](https://github.com/satnaing/astro-paper) 和 Astro 构建，部署在 Vercel。

- 站点：https://earthonline.vercel.app
- 仓库：https://github.com/rmyou/earthonline
- 内容：Markdown / MDX
- 搜索：Pagefind
- 样式：Tailwind CSS 4

## 本地开发

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

开发服务器默认运行在 `http://localhost:4321`。

## 常用命令

```bash
pnpm dev           # 启动开发服务器
pnpm check         # Astro 类型与内容集合检查
pnpm lint          # ESLint
pnpm format:check  # 检查格式
pnpm build         # 类型检查、构建、生成 Pagefind 索引
pnpm preview       # 预览 dist 构建产物
```

## 新建文章

在 `src/content/posts/` 中创建 `.md` 或 `.mdx` 文件：

```yaml
---
author: kream
pubDatetime: 2026-09-13T20:30:00+08:00
title: 文章标题
draft: false
tags:
  - 工程实践
description: 用于列表和 SEO 的文章摘要。
---
正文从这里开始。
```

`draft: true` 的文章不会出现在文章列表、标签、RSS、sitemap 或搜索索引中。

## 项目维护

项目条目位于 `src/data/projects.ts`，字段包括名称、摘要、仓库地址、站点地址、技术栈和状态。

站点名称、作者、域名、导航和社交链接统一在 `astro-paper.config.ts` 中配置。主题颜色位于 `src/styles/theme.css`，界面文案位于 `src/i18n/lang/zh-CN.ts`。

## 部署

GitHub `main` 分支连接 Vercel：

- Install Command：`pnpm install --frozen-lockfile`
- Build Command：`pnpm build`
- Output Directory：`dist`
- Production Branch：`main`

推送到 `main` 会触发生产部署，其他分支和 Pull Request 会生成预览部署。

## License

基于 AstroPaper 的 MIT License 构建，原始版权声明保留在 `LICENSE` 中。
