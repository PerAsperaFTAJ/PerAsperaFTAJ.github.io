export type PortalLinkType = "internal" | "external";
export type PortalBadgeTone = "info" | "warn" | "hot" | "new";

export interface PortalAction {
  text: string;
  link: string;
  linkType?: PortalLinkType;
  style?: "primary" | "secondary";
}

export interface PortalRailItem {
  id: string;
  label: string;
  icon: string;
  link: string;
  linkType?: PortalLinkType;
}

export interface PortalLeftRail {
  siteTag: string;
  siteName: string;
  subtitle: string;
  dateLabel: string;
  railItems: PortalRailItem[];
}

export interface PortalAnnouncementItem {
  title: string;
  tag: string;
  summary?: string;
  link: string;
  linkType?: PortalLinkType;
  tone?: PortalBadgeTone;
}

export interface PortalActivityItem {
  title: string;
  tag: string;
  statusText: string;
  progressLabel: string;
  progressPercent: number;
  link: string;
  linkType?: PortalLinkType;
}

export interface PortalNavShortcut {
  title: string;
  subtitle: string;
  icon: string;
  link: string;
  linkType?: PortalLinkType;
}

export interface PortalCardItem {
  title: string;
  subtitle: string;
  tag: string;
  cover: string;
  badgeTone?: PortalBadgeTone;
  link: string;
  linkType?: PortalLinkType;
}

export interface PortalSectionBlock {
  id: string;
  title: string;
  moreText: string;
  moreLink: string;
  moreLinkType?: PortalLinkType;
  items: PortalCardItem[];
}

export interface PortalSpotlightCard {
  title: string;
  subtitle: string;
  badge: string;
  link: string;
  linkType?: PortalLinkType;
}

export interface PortalSpotlight {
  eyebrow: string;
  title: string;
  subtitle: string;
  badges: string[];
  actions: PortalAction[];
  cards: PortalSpotlightCard[];
}

export interface PortalQuestionItem {
  text: string;
  comments: number;
  link: string;
  linkType?: PortalLinkType;
}

export interface PortalCommunityPost {
  title: string;
  date: string;
  comments: number;
  likes: number;
  pinned?: boolean;
  link: string;
  linkType?: PortalLinkType;
}

export interface PortalRightRail {
  notices: PortalAnnouncementItem[];
  questionPrompt: string;
  questions: PortalQuestionItem[];
  communityPosts: PortalCommunityPost[];
}

export interface PortalMainSections {
  spotlight: PortalSpotlight;
  announcements: PortalAnnouncementItem[];
  announcementMoreLink: string;
  activities: PortalActivityItem[];
  activityMoreLink: string;
  shortcuts: PortalNavShortcut[];
  sections: PortalSectionBlock[];
}

export interface PortalHomeConfig {
  leftRail: PortalLeftRail;
  main: PortalMainSections;
  rightRail: PortalRightRail;
}

export const portalHomeConfig: PortalHomeConfig = {
  leftRail: {
    siteTag: "PER ASPERA",
    siteName: "团队协作百科",
    subtitle: "流程、规范、协作入口",
    dateLabel: "02月24号 · 周二",
    railItems: [
      {
        id: "navigation",
        label: "导航",
        icon: "NA",
        link: "/",
        linkType: "internal"
      },
      {
        id: "search",
        label: "搜索",
        icon: "SE",
        link: "/getting-started",
        linkType: "internal"
      },
      {
        id: "repo",
        label: "仓库",
        icon: "GH",
        link: "https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io",
        linkType: "external"
      }
    ]
  },
  main: {
    spotlight: {
      eyebrow: "本周专题",
      title: "春季协作资料合辑",
      subtitle:
        "将高频协作文档、审阅策略和站点维护入口汇总到同一首页，便于新人上手和日常轮值。",
      badges: ["文档入口", "流程追踪", "安全校验", "值班维护"],
      actions: [
        {
          text: "快速开始",
          link: "/getting-started",
          linkType: "internal",
          style: "primary"
        },
        {
          text: "贡献规范",
          link: "/contributing",
          linkType: "internal",
          style: "secondary"
        }
      ],
      cards: [
        {
          title: "当周 PR 评测",
          subtitle: "提交流程校验",
          badge: "评审",
          link: "/contributing",
          linkType: "internal"
        },
        {
          title: "风险清单巡检",
          subtitle: "process / security",
          badge: "治理",
          link: "/process/review-policy",
          linkType: "internal"
        },
        {
          title: "发布前检查单",
          subtitle: "构建 + lint + 回滚",
          badge: "上线",
          link: "/security/content-security",
          linkType: "internal"
        }
      ]
    },
    announcements: [
      {
        title: "[PickUp 周报] 已同步到贡献指南索引页",
        tag: "更新",
        summary: "新增合并检查与回滚备注模板。",
        link: "/contributing",
        linkType: "internal",
        tone: "new"
      },
      {
        title: "[日服] 文档维护窗口（北京时间 02/28 10:00 - 16:00）",
        tag: "更新",
        summary: "维护期间请避免在高风险目录发起大范围重排。",
        link: "/process/review-policy",
        linkType: "internal",
        tone: "info"
      },
      {
        title: "[公告] docs/process 与 docs/security 修改需先建 Issue",
        tag: "公告",
        summary: "请在 PR 中挂载 Issue 编号并补充风险说明。",
        link: "/process/review-policy",
        linkType: "internal",
        tone: "warn"
      }
    ],
    announcementMoreLink: "/contributing",
    activities: [
      {
        title: "站点首页视觉重构",
        tag: "综合手记",
        statusText: "4小时后结束",
        progressLabel: "设计验收",
        progressPercent: 38,
        link: "/",
        linkType: "internal"
      },
      {
        title: "仓库 SOP 清单补齐",
        tag: "流程",
        statusText: "11小时后结束",
        progressLabel: "撰写中",
        progressPercent: 62,
        link: "/getting-started",
        linkType: "internal"
      },
      {
        title: "审核门禁策略梳理",
        tag: "活动",
        statusText: "7天后结束",
        progressLabel: "讨论阶段",
        progressPercent: 71,
        link: "/process/review-policy",
        linkType: "internal"
      },
      {
        title: "内容安全条款复核",
        tag: "特别任务",
        statusText: "21天后结束",
        progressLabel: "长期事项",
        progressPercent: 86,
        link: "/security/content-security",
        linkType: "internal"
      }
    ],
    activityMoreLink: "/process/review-policy",
    shortcuts: [
      {
        title: "学生圈层",
        subtitle: "新人上手",
        icon: "学",
        link: "/getting-started",
        linkType: "internal"
      },
      {
        title: "官方流程",
        subtitle: "提交规范",
        icon: "流",
        link: "/contributing",
        linkType: "internal"
      },
      {
        title: "同人广场",
        subtitle: "协作讨论",
        icon: "论",
        link: "https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io/discussions",
        linkType: "external"
      },
      {
        title: "强度榜单",
        subtitle: "风险优先",
        icon: "风",
        link: "/process/review-policy",
        linkType: "internal"
      },
      {
        title: "玩法攻略",
        subtitle: "开发命令",
        icon: "构",
        link: "/getting-started",
        linkType: "internal"
      },
      {
        title: "关卡攻略",
        subtitle: "合并门禁",
        icon: "审",
        link: "/process/review-policy",
        linkType: "internal"
      },
      {
        title: "萌新指引",
        subtitle: "贡献入口",
        icon: "新",
        link: "/contributing",
        linkType: "internal"
      },
      {
        title: "社区讨论",
        subtitle: "反馈池",
        icon: "社",
        link: "https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io/issues",
        linkType: "external"
      }
    ],
    sections: [
      {
        id: "popular-content",
        title: "常用内容",
        moreText: "更多",
        moreLink: "/contributing",
        moreLinkType: "internal",
        items: [
          {
            title: "游戏开发部署作业",
            subtitle: "从本地构建到 Pages 发布的最短路径。",
            tag: "当期活动",
            cover: "发布",
            badgeTone: "hot",
            link: "/getting-started",
            linkType: "internal"
          },
          {
            title: "日服当期卡池评测",
            subtitle: "PR 模板中的验证细则与影响面写法。",
            tag: "当期卡池",
            cover: "评测",
            badgeTone: "info",
            link: "/contributing",
            linkType: "internal"
          },
          {
            title: "国际服高优先事项",
            subtitle: "高风险目录改动前后的审查要求。",
            tag: "国际服",
            cover: "治理",
            badgeTone: "warn",
            link: "/process/review-policy",
            linkType: "internal"
          },
          {
            title: "国服本季度策略",
            subtitle: "内容安全约束、回滚策略与签核路径。",
            tag: "国服",
            cover: "安全",
            badgeTone: "new",
            link: "/security/content-security",
            linkType: "internal"
          }
        ]
      },
      {
        id: "quick-entry",
        title: "常用导航",
        moreText: "更多",
        moreLink: "https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io",
        moreLinkType: "external",
        items: [
          {
            title: "变更申请入口",
            subtitle: "提交 Wiki 变更申请 Issue，附风险与回滚方案。",
            tag: "ISSUE",
            cover: "申请",
            badgeTone: "info",
            link: "https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io/issues/new?template=wiki-change-request.yml",
            linkType: "external"
          },
          {
            title: "PR 模板",
            subtitle: "统一记录验证步骤、风险范围与复盘备注。",
            tag: "PR",
            cover: "模板",
            badgeTone: "hot",
            link: "https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io/blob/main/.github/PULL_REQUEST_TEMPLATE.md",
            linkType: "external"
          },
          {
            title: "Actions 状态",
            subtitle: "查看文档校验与部署流水线运行状态。",
            tag: "CI",
            cover: "流水",
            badgeTone: "new",
            link: "https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io/actions",
            linkType: "external"
          },
          {
            title: "Pull Requests",
            subtitle: "定位待审与已合并 PR 的上下文。",
            tag: "Review",
            cover: "评审",
            badgeTone: "warn",
            link: "https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io/pulls",
            linkType: "external"
          }
        ]
      }
    ]
  },
  rightRail: {
    notices: [
      {
        title: "首页改版后，栏目内容可在 portal.config.ts 直接维护。",
        tag: "公告",
        link: "/",
        linkType: "internal",
        tone: "info"
      },
      {
        title: "流程与安全目录属于高风险路径，改动需先建 Issue。",
        tag: "提醒",
        link: "/process/review-policy",
        linkType: "internal",
        tone: "warn"
      }
    ],
    questionPrompt: "输入你的问题",
    questions: [
      {
        text: "日服维护公告的时间窗口应写在 PR 说明还是 Wiki 页面？",
        comments: 1,
        link: "/contributing",
        linkType: "internal"
      },
      {
        text: "合并前检查里只有两项通过，是否可以先发布再补验？",
        comments: 2,
        link: "/process/review-policy",
        linkType: "internal"
      },
      {
        text: "内容安全条款更新后，历史页面需要批量回查吗？",
        comments: 1,
        link: "/security/content-security",
        linkType: "internal"
      },
      {
        text: "为什么本周评审频次增加，是否触发了新的门禁策略？",
        comments: 1,
        link: "/process/review-policy",
        linkType: "internal"
      }
    ],
    communityPosts: [
      {
        title: "[置顶] 语音档案 Wiki 新版上线说明",
        date: "2026年02月14日",
        comments: 0,
        likes: 11,
        pinned: true,
        link: "https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io/discussions",
        linkType: "external"
      },
      {
        title: "[置顶] wiki 玩家群变动公告（2025/12/29）",
        date: "2025年12月29日",
        comments: 0,
        likes: 9,
        pinned: true,
        link: "https://github.com/PerAsperaFTAJ/PerAsperaFTAJ.github.io/discussions",
        linkType: "external"
      }
    ]
  }
};

export const portalLeftRail = portalHomeConfig.leftRail;
export const portalMainSections = portalHomeConfig.main;
export const portalRightRail = portalHomeConfig.rightRail;

export const portalAnnouncements = portalHomeConfig.main.announcements;
export const portalActivities = portalHomeConfig.main.activities;
export const portalNavShortcuts = portalHomeConfig.main.shortcuts;
