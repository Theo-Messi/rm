---
title: 首页公告栏
---

## 效果图

![](https://i.theojs.cn/docs/202408082101730.png)

## 引入组件

```ts
// .vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
import { Announcement } from '@theo-messi/tm-fe'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement)
    })
  }
}
```

## 配置公告栏

修改`index.md`

```md
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'TM-FE'
  text: 'Enhanced '
  tagline: 用于VitePress主题美化和集成Vue功能组件
  prelink:// [!code ++]
    title: '快速开始<div style="text-align: right; font-weight: bold;"><i class="fas fa-pnpm" style="color: #FFD43B;"></i>pnpm add @theo-messi/tm-fe</div>'// [!code ++]
    # link: https://doc.theojs.cn/// [!code ++]
    # target: _blank// [!code ++]
---
```
