---
title: 侧边栏链接
---

## 效果图

![](https://i.theojs.cn/docs/202408081937401.png =300x300)

## 创建数据

在`.vitepress`目录下新建`data/AsideData.ts`文件，并添加以下内容：
::: tip
`Aside_Data`数组中，`link`为链接地址，`icon`为图标地址，`Activity`为活动名称

自行替换下方数据
:::

```ts
// .vitepress/data/AsideData.ts

export const Aside_Data = [
  {
    link: 'https://fbinv01.fbaff.cc/auth/register?code=RZP3',
    icon: 'https://flyingbirdlimo.com/wp-content/uploads/2022/03/Flying-Bird-Logo-cropped.png',
    Activity: 'FlyingBird 618活动来了',
    info1: '月付 85折 优惠码  2461885',
    info2: '年付 64折 优惠码  2461880'
  },
  {
    link: 'https://xx.theojs.cn/',
    icon: 'https://i.theojs.cn/avatar.png',
    name: '玄学宝典',
    hide1: '传世经典著作',
    hide2: '山医命相卜'
  },
  {
    link: 'https://github.com/sponsors/Theo-Messi',
    icon: 'https://doc.theojs.cn/爱心.png',
    name: '为我赞助'
  }
]
```

## 引入组件

```ts
//.vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
import { h } from 'vue' // [!code ++]
import { DocAsideLogo } from '@theo-messi/tm-fe' // [!code ++]
import { Aside_Data } from '../data/AsideData' // [!code ++]
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }) // [!code ++]
    })
  }
}
```
