import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { imgSize } from '@mdit/plugin-img-size'

import pkg from '../../package.json'

export default defineConfig({
  title: 'TM-FE',
  description: '用于VitePress主题美化和集成Vue功能组件',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'icon',
        href: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Theme.png'
      }
    ]
  ],
  markdown: {
    config: (md) => {
      md.use(imgSize)
    }
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('../../packages/vue/HomeFooter.vue', import.meta.url)
          )
        }
      ]
    },
    define: {
      FooterData: JSON.stringify(require('./data/FooterData').Footer_Data)
    }
  },
  themeConfig: {
    logo: {
      src: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Theme.png',
      width: 24,
      height: 24
    },
    editLink: {
      pattern: 'https://github.com/Theo-Messi/tm-fe/blob/main/docs/:path',
      text: '为此页提供修改建议'
    },
    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本
    // 上次更新
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'full',
        hourCycle: 'h24'
      }
    },
    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 主题模式切换
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',

    // markdown 外部链接图标
    // externalLinkIcon: true,
    // 语言切换
    langMenuLabel: '切换语言',
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      {
        text: '提交反馈',
        link: 'https://github.com/Theo-Messi/tm-fe/issues'
      },
      {
        text: pkg.version,
        link: 'https://github.com/Theo-Messi/tm-fe/releases'
      }
    ],
    sidebar: {
      guide: {
        base: '/guide/',
        items: [
          {
            // text: '快速开始',
            items: [
              {
                text: '<i class="fas fa-bolt" style="color: #63E6BE;"></i> 快速开始',
                link: 'getting-started'
              }
            ]
          },
          {
            text: '配置',
            items: [
              {
                text: '<i class="fas fa-palette" style="color: #ff9900;"></i> 导入主题配色',
                link: 'theme'
              },
              {
                text: '<i class="fas fa-bullhorn" style="color: #63E6BE;"></i> 首页公告栏',
                link: 'prelink'
              },
              {
                text: '<i class="fas fa-underline" style="color: #74C0FC;"></i> 首页下划线',
                link: 'underline'
              },
              {
                text: '<i class="fas fa-shoe-prints" style="color: #63E6BE;"></i> 页脚配置',
                link: 'footer'
              },
              {
                text: '<i class="fas fa-link" style="color: #74C0FC;"></i> 侧边栏链接',
                link: 'aside'
              },
              {
                text: '<i class="fas fa-video" style="color: #63E6BE;"></i> 视频组件',
                link: 'video'
              },
              {
                text: '<i class="fas fa-link" style="color: #74C0FC;"></i> 链接卡片',
                link: 'links'
              }
            ]
          }
        ]
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Theo-Messi/tm-fe' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/tm-fe' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})
