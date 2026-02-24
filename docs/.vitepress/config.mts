import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Per Aspera 团队 Wiki",
  description: "团队协作文档站点",
  lang: "zh-CN",
  base: "/",
  appearance: false,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "协作入门", link: "/getting-started" },
      {
        text: "流程规范",
        items: [
          { text: "贡献指南", link: "/contributing" },
          { text: "评审策略", link: "/process/review-policy" }
        ]
      },
      { text: "安全治理", link: "/security/content-security" }
    ],
    sidebar: [
      {
        text: "门户导航",
        items: [
          { text: "首页门户", link: "/" },
          { text: "开始使用", link: "/getting-started" },
          { text: "贡献指南", link: "/contributing" }
        ]
      },
      {
        text: "流程与治理",
        items: [
          { text: "评审策略", link: "/process/review-policy" },
          { text: "内容安全", link: "/security/content-security" }
        ]
      }
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io"
      }
    ],
    editLink: {
      pattern:
        "https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页"
    },
    search: {
      provider: "local"
    },
    outline: {
      level: [2, 3],
      label: "页面目录"
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    lastUpdated: {
      text: "最后更新于"
    }
  }
});
