# kream's life

kream 的个人网站：博客文章、摄影作品与背景音乐。使用 [AstroPaper](https://github.com/satnaing/astro-paper) 和 Astro 构建，通过 GitHub Actions 部署到 GitHub Pages。

- 站点：https://rmyou.github.io/earthonline/
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

开发服务器默认运行在 `http://localhost:4321/earthonline/`。

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

站点名称、作者、首页文案、背景图和主题预设统一在 `src/data/site-settings.json` 中配置（通过 Pages CMS 的“站点设置”编辑）。导航、社交链接和功能开关位于 `astro-paper.config.ts`，主题颜色位于 `src/styles/theme.css`，界面文案位于 `src/i18n/lang/zh-CN.ts`。

## 背景音乐

- 音乐文件放在 `public/music/`（支持 mp3 / m4a / ogg），曲目在 `src/data/music.json` 中登记。
- 播放器固定在页面左下角，支持上一首/下一首、音量和收起；曲目、播放进度、音量和收起状态会记在浏览器本地，访客上次听到一半，下次在页面内点击后会从该位置续播。
- `enabled` 为 `false` 或曲目为空时播放器不显示。受浏览器自动播放策略限制，访客首次访问不会直接出声，需要先点击一次播放器或页面。
- 日常添加曲目推荐在 Pages CMS 的“背景音乐”中完成：先把音频上传到媒体库的 `music` 目录，再填写曲名、作者和文件。

## 摄影作品

- 原图放在 `public/photography/`，作品信息在 `src/data/photography.json` 中登记：标题、照片、拍摄日期、地点、说明、是否隐藏。
- “摄影”页（`/earthonline/photography`）以白边框 + 阴影的拍立得卡片瀑布流展示；点开后背景为同图全屏高斯模糊，中央是带白边框和阴影的完整大图，支持左右方向键、左右滑动和 Esc 关闭。
- 日常添加作品推荐在 Pages CMS 的“摄影作品”中完成：先把照片上传到媒体库的 `photography` 目录，再填写信息；标记“隐藏该作品”（草稿）的照片不会出现在页面上。
- 作品列表为空时页面显示整理中的提示，不会报错。

## 文章插图

文章正文使用 Markdown，直接插入图片即可（推荐先上传到媒体库的 `uploads` 目录），正文图片带圆角、细边框和柔和阴影，点击可放大查看，支持键盘和触摸缩放。

## 使用网页后台

站点接入 [Pages CMS](https://app.pagescms.org/)，不需要数据库或额外服务器。

1. 打开 `https://app.pagescms.org/` 并使用 GitHub 登录。
2. 安装 Pages CMS GitHub App，并授权 `rmyou/earthonline`。
3. 选择该仓库后，可以编辑文章、页面、摄影作品、背景音乐、站点资料、首页文案和主题配色。
4. 保存时 Pages CMS 会提交到 `main`，GitHub Actions 随后自动发布。

可编辑的主题预设包括蓝青、黑白、暖橙和森林，也可以在“网页背景”中上传全站背景图；未设置背景图时保持纯色主题。媒体库分三个目录：文章与背景图上传到 `public/uploads/`，音乐上传到 `public/music/`，摄影原图上传到 `public/photography/`，正文使用 Markdown。

## 部署

仓库使用 `.github/workflows/deploy.yml`，在推送到 `main` 后由 GitHub Actions 构建并发布到 GitHub Pages。

首次启用时，在仓库的 **Settings → Pages → Build and deployment** 中将 Source 设置为 **GitHub Actions**。之后每次推送 `main` 都会自动更新站点，也可以在 Actions 页面手动运行 `Deploy to GitHub Pages` 工作流。

站点使用项目子路径 `/earthonline`，因此 Astro 的 `site` 为 `https://rmyou.github.io`，`base` 为 `/earthonline`。新增 Markdown 内链时应使用相对链接，或在 Astro 组件中使用 `getRelativeLocaleUrl`、`getAssetPath`。

## License

基于 AstroPaper 的 MIT License 构建，原始版权声明保留在 `LICENSE` 中。
