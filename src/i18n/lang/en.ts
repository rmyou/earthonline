// 用途：保存英文回退文案。
// 编辑：新增界面文案字段时同步补充英文。
import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Home",
    posts: "Posts",
    tags: "Tags",
    about: "About",
    projects: "Projects",
    photography: "Photos",
    archives: "Archives",
    search: "Search",
  },
  post: {
    publishedAt: "Published at",
    updatedAt: "Updated",
    sharePostIntro: "Share this post:",
    sharePostOn: "Share this post on {{platform}}",
    sharePostViaEmail: "Share this post via email",
    tagLabel: "Tags",
    backToTop: "Back to top",
    goBack: "Go back",
    editPage: "Edit page",
    previousPost: "Previous Post",
    nextPost: "Next Post",
  },
  pagination: {
    prev: "Prev",
    next: "Next",
    page: "Page",
  },
  home: {
    socialLinks: "Social Links",
    featured: "Featured",
    recentPosts: "Recent Posts",
    allPosts: "All Posts",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "All the articles with the tag",

    tagsTitle: "Tags",
    tagsDesc: "All the tags used in posts.",

    postsTitle: "Posts",
    postsDesc: "All the articles I've posted.",

    archivesTitle: "Archives",
    archivesDesc: "All the articles I've archived.",

    projectsTitle: "Projects",
    projectsDesc: "Selected projects I build and maintain.",

    photographyTitle: "Photography",
    photographyDesc: "Moments I want to keep, through the lens.",

    searchTitle: "Search",
    searchDesc: "Search any article ...",
  },
  projects: {
    active: "Active",
    building: "Building",
    paused: "Paused",
    repository: "Repository",
    website: "Website",
  },
  photos: {
    empty: "Photos are being curated. Check back soon.",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    searchPlaceholder: "Search posts...",
    noResults: "No results found",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
    paginationLabel: "Pagination navigation",
    musicPlay: "Play background music",
    musicPause: "Pause background music",
    musicPrevious: "Previous track",
    musicNext: "Next track",
    musicVolume: "Volume",
    musicMute: "Mute",
    musicUnmute: "Unmute",
    musicExpand: "Expand music player",
    musicCollapse: "Collapse music player",
    photoOpen: "View large image",
    photoClose: "Close preview",
    photoPrevious: "Previous photo",
    photoNext: "Next photo",
  },
  notFound: {
    title: "404 Not Found",
    message: "Page Not Found",
    goHome: "Go back home",
  },
} satisfies UIStrings;
