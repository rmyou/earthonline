// 用途：定义界面文案的字段结构。
// 编辑：新增界面文案字段时同步补充英文和中文翻译。
export interface UIStrings {
  nav: {
    home: string;
    posts: string;
    tags: string;
    about: string;
    projects: string;
    archives: string;
    search: string;
  };
  post: {
    publishedAt: string;
    updatedAt: string;
    sharePostIntro: string;
    sharePostOn: string;
    sharePostViaEmail: string;
    tagLabel: string;
    backToTop: string;
    goBack: string;
    editPage: string;
    previousPost: string;
    nextPost: string;
  };
  pagination: {
    prev: string;
    next: string;
    page: string;
  };
  home: {
    socialLinks: string;
    featured: string;
    recentPosts: string;
    allPosts: string;
  };
  footer: {
    copyright: string;
    allRightsReserved: string;
  };
  pages: {
    tagTitle: string;
    tagDesc: string;

    tagsTitle: string;
    tagsDesc: string;

    postsTitle: string;
    postsDesc: string;

    archivesTitle: string;
    archivesDesc: string;

    projectsTitle: string;
    projectsDesc: string;

    searchTitle: string;
    searchDesc: string;
  };
  projects: {
    active: string;
    building: string;
    paused: string;
    repository: string;
    website: string;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    searchPlaceholder: string;
    noResults: string;
    goToPreviousPage: string;
    goToNextPage: string;
    paginationLabel: string;
  };
  notFound: {
    title: string;
    message: string;
    goHome: string;
  };
}
