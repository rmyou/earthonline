// 用途：定义界面文案的字段结构。
// 编辑：新增界面文案字段时同步补充英文和中文翻译。
export interface UIStrings {
  nav: {
    home: string;
    posts: string;
    tags: string;
    about: string;
    projects: string;
    photography: string;
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

    photographyTitle: string;
    photographyDesc: string;

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
  photos: {
    empty: string;
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
    musicPlay: string;
    musicPause: string;
    musicPrevious: string;
    musicNext: string;
    musicVolume: string;
    musicMute: string;
    musicUnmute: string;
    musicExpand: string;
    musicCollapse: string;
    photoOpen: string;
    photoClose: string;
    photoPrevious: string;
    photoNext: string;
  };
  notFound: {
    title: string;
    message: string;
    goHome: string;
  };
}
