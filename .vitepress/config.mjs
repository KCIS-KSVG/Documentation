import { defineConfig } from 'vitepress'

export default defineConfig({
  // 你的 GitHub 仓库路径 (自定义域名根目录)
  base: '/',

  // 网站标题
  title: "Documentation",
  description: "昆山康桥学生摄影合作组织标准化文档",

  head: [
    ['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/KCIS-KSVG/Data/main/embed/ksvg-logo.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap' }]
  ],

  themeConfig: {
    logo: 'https://raw.githubusercontent.com/KCIS-KSVG/Data/main/embed/ksvg-logo.png',

    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      // 链接指向第一个标准文档
      { text: '标准文档库', link: '/standards/ks-1001' },
    ],

    // 侧边栏配置
    sidebar: {
      '/standards/': [
        // --- 1000 基础架构 ---
        {
          text: '1000 基础与行政',
          items: [
            { text: 'KS-1001 组织行政架构与权责分配通则', link: '/standards/ks-1001' },
            { text: 'KS-1002 标准体系文件管理规范', link: '/standards/ks-1002' },
            { text: 'KS-1003 合规性与风险控制规范', link: '/standards/ks-1003' }
          ]
        },

        // --- 2000 人力资源体系 ---
        {
          text: '2000 人力与能力',
          items: [
            { text: 'KS-2001 成员准入与身份管理规范', link: '/standards/ks-2001' },
            { text: 'KS-2002 岗位能力要求与资格认证标准', link: '/standards/ks-2002' },
            { text: 'KS-2003 行为准则与道德规范', link: '/standards/ks-2003' }
          ]
        },
        {
          text: '2100 岗位职责说明书',
          items: [
            { text: 'KS-2101 行政专员岗位职责说明书', link: '/standards/ks-2101' },
            { text: 'KS-2102 摄影师岗位职责说明书', link: '/standards/ks-2102' },
            { text: 'KS-2103 摄像师岗位职责说明书', link: '/standards/ks-2103' },
            { text: 'KS-2104 摄影指导岗位职责说明书', link: '/standards/ks-2104' },
            { text: 'KS-2105 航拍操作员岗位职责说明书', link: '/standards/ks-2105' },
            { text: 'KS-2106 后期剪辑师岗位职责说明书', link: '/standards/ks-2106' }
          ]
        },

        // --- 3000 资产管理 ---
        {
          text: '3000 资产与环境',
          items: [
            { text: 'KS-3001 实体资产配置与控制规范', link: '/standards/ks-3001' },
            { text: 'KS-3002 数据资产与信息安全管理规范', link: '/standards/ks-3002' },
            { text: 'KS-3003 知识库建设与传承管理规范', link: '/standards/ks-3003' }
          ]
        },

        // --- 4000 业务运行体系 ---
        {
          text: '4000 业务运行',
          items: [
            { text: 'KS-4001 运行策划与需求评审规范', link: '/standards/ks-4001' },
            { text: 'KS-4002 创意设计与开发控制规范', link: '/standards/ks-4002' },
            { text: 'KS-4003 服务提供与现场执行规范', link: '/standards/ks-4003' },
            { text: 'KS-4004 外部供应与协作方管理规范', link: '/standards/ks-4004' },
            { text: 'KS-4005 产品交付与放行规范', link: '/standards/ks-4005' }
          ]
        },
        {
          text: '4100 技术执行细则',
          items: [
            { text: 'KS-4101 视觉识别系统 (VI) 与品牌应用规范', link: '/standards/ks-4101' },
            { text: 'KS-4102 影像交付技术参数标准', link: '/standards/ks-4102' },
            { text: 'KS-4103 航空摄影安全操作细则', link: '/standards/ks-4103' }
          ]
        },

        // --- 5000 评价与改进 ---
        {
          text: '5000 评价与改进',
          items: [
            { text: 'KS-5001 绩效监视与测量标准', link: '/standards/ks-5001' },
            { text: 'KS-5002 内部审核与管理评审规范', link: '/standards/ks-5002' },
            { text: 'KS-5003 不合格项控制与纠正措施', link: '/standards/ks-5003' }
          ]
        },
        {
          text: '5100 评价量化表',
          items: [
            { text: 'KS-5101 成员绩效积分实施细则', link: '/standards/ks-5101' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KCIS-KSVG' }
    ],

    search: { provider: 'local' }
  }
})