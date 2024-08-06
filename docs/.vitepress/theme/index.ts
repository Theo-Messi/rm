import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import '../../../package/scss/all.scss'
import {
  DocBox,
  DocLinks,
  DocBoxCube,
  DocVideoLink,
  Announcement,
  DocAsideLogo,
  HomeUnderline
} from '../../../package/vue'
import { banners } from '../data/AsideData'
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-ads-before': () => h(DocAsideLogo, { banners })
    })
  },
  enhanceApp: ({ app }) => {
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('Home', HomeUnderline)
    app.component('VideoLink', DocVideoLink)
  }
}
