import siteSettings from "./src/data/site-settings.json";
import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://rmyou.github.io/earthonline/",
    title: siteSettings.site.title,
    description: siteSettings.site.description,
    author: siteSettings.site.author,
    profile: siteSettings.site.profile,
    ogImage: "default-og.jpg",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 5,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/rmyou/earthonline/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/rmyou",
      linkTitle: "kream 的 GitHub",
    },
  ],
  shareLinks: [
    {
      name: "x",
      url: "https://x.com/intent/post?url=",
      linkTitle: "在 X 分享这篇文章",
    },
    {
      name: "telegram",
      url: "https://t.me/share/url?url=",
      linkTitle: "通过 Telegram 分享这篇文章",
    },
    {
      name: "mail",
      url: "mailto:?subject=分享一篇文章&body=",
      linkTitle: "通过邮件分享这篇文章",
    },
  ],
});
