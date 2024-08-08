---
title: 首页下划线
---

::: warning
该功能目前还未完善 **请谨慎使用!**
:::

## 效果图

![](https://i.theojs.cn/docs/202408082117729.png =700x700)

## 引入组件

```ts
// .vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
import { HomeUnderline } from '@theo-messi/tm-fe' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('Home', HomeUnderline) // [!code ++]
  }
}
```

## 使用

```md
---
layout: home

hero:
  name: TM-FE
  text: 'Enhanced '
  tagline: ✨ 集成 Vue 功能组件和主题美化的 VitePress 插件
  image:
    src: https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Theme.png
    alt: Theme
---

<Home />
```

::: warning

- 下划线识别为`hero.text`
- `hero.image.alt` 会自动加在下划线后面
  :::
