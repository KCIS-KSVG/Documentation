import { defineConfig } from 'vitepress'

export default defineConfig({
  // 你的 GitHub 仓库路径
  base: '/',

  // 网站标题修改为 KSVG Documentation
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
      { text: '技术标准库', link: '/standards/KSVG-10-01' },
    ],

    // 侧边栏配置
    sidebar: {
      // 标准库侧边栏
      '/standards/': [
        {
          text: '00_顶层设计与元标准',
          items: [
            // 这里仅仅修改了显示的文字，去掉了 ISO，改用编号
            { text: 'KSVG-10-01', link: '/standards/KSVG-10-01' },
            { text: 'KSVG-10-02', link: '/standards/KSVG-10-02' },
            { text: 'KSVG-10-03', link: '/standards/KSVG-10-03' },
          ]
        },
        {
          text: '10_人力资源与团队建设',
          items: [
            { text: 'KSVG-20-01', link: '/standards/KSVG-20-01' },
            { text: 'KSVG-20-02', link: '/standards/KSVG-20-02' },
            { text: 'KSVG-20-03', link: '/standards/KSVG-20-03' },
            { text: 'KSVG-20-03', link: '/standards/KSVG-20-03' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KCIS-KSVG' }
    ],

    search: { provider: 'local' }
  }
})