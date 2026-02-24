export type PortalTone = "amber" | "teal" | "emerald" | "slate";

export interface PortalAction {
  text: string;
  link: string;
  style?: "primary" | "secondary";
}

export interface PortalQuickLink {
  title: string;
  description: string;
  link: string;
}

export interface PortalCard {
  title: string;
  description: string;
  link: string;
  tone: PortalTone;
  tag: string;
  updated: string;
}

export interface PortalSection {
  id: string;
  title: string;
  subtitle: string;
  cards: PortalCard[];
}

export const portalHero = {
  label: "团队协作 Wiki",
  title: "Per Aspera 文档门户",
  subtitle:
    "将流程、规范与安全内容聚合到一个入口层，减少查找路径，让协作信息一跳可达。",
  actions: [
    { text: "立即开始", link: "/getting-started", style: "primary" as const },
    { text: "阅读贡献指南", link: "/contributing", style: "secondary" as const }
  ]
};

export const portalQuickLinks: PortalQuickLink[] = [
  {
    title: "投稿权限申请",
    description: "首次贡献者先走申请 Issue，审核通过后再进入常规 PR 流程。",
    link: "https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io/issues/new?template=wiki-change-request.yml"
  },
  {
    title: "PR 模板",
    description: "统一变更说明、验证记录与回滚说明，提升评审效率。",
    link: "https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io/blob/main/.github/PULL_REQUEST_TEMPLATE.md"
  },
  {
    title: "仓库首页",
    description: "查看最新提交、分支与工作流状态，快速定位变更上下文。",
    link: "https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io"
  }
];

export const portalSections: PortalSection[] = [
  {
    id: "onboarding",
    title: "协作入门",
    subtitle: "新人上手与协作角色说明",
    cards: [
      {
        title: "开始使用",
        description: "环境准备、目录约定与发布机制总览。",
        link: "/getting-started",
        tone: "amber",
        tag: "基础",
        updated: "持续更新"
      },
      {
        title: "贡献指南",
        description: "投稿权限申请、协作者流程与 PR 要求。",
        link: "/contributing",
        tone: "teal",
        tag: "流程",
        updated: "高频访问"
      }
    ]
  },
  {
    id: "governance",
    title: "流程治理",
    subtitle: "评审与质量门禁相关规范",
    cards: [
      {
        title: "评审策略",
        description: "定义评审责任、检查重点与风险控制边界。",
        link: "/process/review-policy",
        tone: "emerald",
        tag: "治理",
        updated: "需先提 Issue"
      }
    ]
  },
  {
    id: "security",
    title: "安全治理",
    subtitle: "内容风险与发布安全规则",
    cards: [
      {
        title: "内容安全",
        description: "安全条线文档，涉及敏感目录与高风险变更。",
        link: "/security/content-security",
        tone: "slate",
        tag: "安全",
        updated: "需先提 Issue"
      }
    ]
  }
];
