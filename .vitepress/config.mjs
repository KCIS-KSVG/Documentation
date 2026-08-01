import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'KSVG Wiki | Photography Knowledge Base',
  description: 'KSVG 摄影与媒体技术知识库',

  head: [
    ['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/KCIS-KSVG/Data/main/embed/ksvg-logo.png' }],
    ['meta', { property: 'og:title', content: 'KSVG Wiki' }],
    ['meta', { property: 'og:description', content: 'KSVG 摄影与媒体技术知识库' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['link', { rel: 'canonical', href: 'https://wiki.ksvg.com.cn/' }],
    ['meta', { name: 'geo.region', content: 'CN' }],
    ['meta', { name: 'geo.placename', content: 'China' }],
  ],

  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      themeConfig: {
        // ============================================================
        // 导航栏顺序：首页 → 快速开始 → 隐私政策（外部）→ 招募政策（外部）→ 官方网站（外部）→ 运营架构与标准（外部）
        // ============================================================
        nav: [
          { text: '首页', link: '/' },
          { 
            text: '快速开始', 
            link: '/01-photography-fundamentals/'
          },
          { 
            text: '隐私政策', 
            link: 'https://docs.ksvg.com.cn/embed/privacy.html',
            target: '_blank' 
          },
          { 
            text: '招募政策', 
            link: 'https://docs.ksvg.com.cn/embed/recruiting.html',
            target: '_blank' 
          },
          { 
            text: '官方网站', 
            link: 'https://ksvg.com.cn',
            target: '_blank' 
          },
          { 
            text: '运营架构与标准', 
            link: 'https://docs.ksvg.com.cn',
            target: '_blank' 
          },
        ],
        sidebar: sidebar('zh-CN'),
        footer: {
          message: '基于 VitePress 构建 · 知识共享署名-非商业性使用 4.0',
          copyright: 'Copyright © 2022-2026 KSVG'
        }
      }
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-TW/',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/' },
          { 
            text: '快速開始', 
            link: '/01-photography-fundamentals/'
          },
          { 
            text: '隱私政策', 
            link: 'https://docs.ksvg.com.cn/embed/privacy.html',
            target: '_blank' 
          },
          { 
            text: '招募政策', 
            link: 'https://docs.ksvg.com.cn/embed/recruiting.html',
            target: '_blank' 
          },
          { 
            text: '官方網站', 
            link: 'https://ksvg.com.cn',
            target: '_blank' 
          },
          { 
            text: '運營架構與標準', 
            link: 'https://docs.ksvg.com.cn',
            target: '_blank' 
          },
        ],
        sidebar: sidebar('zh-TW'),
        footer: {
          message: '基於 VitePress 構建 · 知識共享署名-非商業性使用 4.0',
          copyright: 'Copyright © 2022-2026 KSVG'
        }
      }
    },
    'en-US': {
      label: 'English',
      lang: 'en-US',
      link: '/en-US/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { 
            text: 'Quick Start', 
            link: '/01-photography-fundamentals/'
          },
          { 
            text: 'Privacy Policy', 
            link: 'https://docs.ksvg.com.cn/embed/privacy.html',
            target: '_blank' 
          },
          { 
            text: 'Recruiting Policy', 
            link: 'https://docs.ksvg.com.cn/embed/recruiting.html',
            target: '_blank' 
          },
          { 
            text: 'Official Site', 
            link: 'https://ksvg.com.cn',
            target: '_blank' 
          },
          { 
            text: 'Operations & Standards', 
            link: 'https://docs.ksvg.com.cn',
            target: '_blank' 
          },
        ],
        sidebar: sidebar('en-US'),
        footer: {
          message: 'Built with VitePress · Creative Commons Attribution-NonCommercial 4.0',
          copyright: 'Copyright © 2022-2026 KSVG'
        }
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KCIS-KSVG' }
    ],
    search: {
      provider: 'local'
    }
  }
})