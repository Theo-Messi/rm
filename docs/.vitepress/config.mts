import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  title: 'tmfe',
  description: 'vitepress beautification module',
  cleanUrls: true,
  head: [['link', { rel: 'icon', type: 'icon', href: '/avatar.png' }]],
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('../../package/vue/HomeFooter.vue', import.meta.url)
          )
        }
      ]
    },
    define: {
      FooterData: JSON.stringify(require('./data/FooterData').sections)
    }
  },
  themeConfig: {
    logo: { src: '/avatar.png', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'test', link: '/test' }
    ],
    sidebar: [{ text: '测试', link: '/test' }]
  }
})
