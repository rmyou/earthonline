export type ProjectStatus = "active" | "building" | "paused";

export interface Project {
  name: string;
  summary: string;
  repoUrl: string;
  siteUrl?: string;
  stack: string[];
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    name: "earthonline 博客",
    summary:
      "基于 AstroPaper 构建的中文技术博客，关注内容体验、静态搜索和长期可维护性。",
    repoUrl: "https://github.com/rmyou/earthonline",
    siteUrl: "https://rmyou.github.io/earthonline",
    stack: ["Astro", "TypeScript", "Tailwind CSS", "Pagefind"],
    status: "active",
  },
];
