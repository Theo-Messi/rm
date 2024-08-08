---
title: 视频组件
---

## 示例

**输入**

```vue-html
<VideoLink
  href="//player.bilibili.com/player.html?aid=1205847484"
  name="【MV】HELP!! - 可波·卡娜埃露"
/>
```

**输出**

<VideoLink
  href="//player.bilibili.com/player.html?aid=1205847484"
  name="【MV】HELP!! - 可波·卡娜埃露"
/>

## 引入组件

```ts
// .vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
import { DocVideoLink } from '@theo-messi/tm-fe' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('VideoLink', DocVideoLink) // [!code ++]
  }
}
```

::: tip
点击查看[目前支持的链接](https://github.com/Theo-Messi/tm-fe/blob/main/packages/vue/videoDomains.ts),如有补充欢迎提交!
:::
