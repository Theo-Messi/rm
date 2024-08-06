---
title: Markdown 入门使用
head:
  - - meta
    - name: description
      content: Markdown 入门使用
---

<BoxCube
  :items="[
    //使用FontAwesome图标
    { name: 'Github', link: '', icon: 'fab fa-github' },
    //使用FontAwesome图标 + 副标题
    { name: 'Vue.js', link: '', icon: 'fab fa-vuejs', desc: 'v3.4.31' },
    //使用自定义图标+副标题
    {
      name: 'Node.js',
      link: '',
      icon: 'https://i.theojs.cn/logo/nodejs.svg',
      desc: 'v20.15.0'
    },
    //使用自定义图标+深浅模式+副标题
    {
      name: 'Github',
      link: '',
      light: 'https://i.theojs.cn/logo/github.svg',
      dark: 'https://i.theojs.cn/logo/github-dark.svg',
      desc: 'v20.15.0'
    }
  ]"
/>

---

<Box
  :items="[
    //使用FontAwesome图标 + 颜色
    { name: 'Vue.js', link: '', icon: 'fab fa-vuejs', color: '#4FC08D' },
    //使用FontAwesome图标 + 标签
    { name: 'GitHub', link: '', icon: 'fab fa-github', tag: 'Github' },
    //使用FontAwesome图标 + 标签 + 颜色
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      icon: 'fab fa-alipay',
      color: '#00a1e9',
      tag: '打赏'
    },
    {
      name: '微信',
      link: 'https://i.theojs.cn/docs/202405201752087.jpg',
      icon: 'fab fa-weixin',
      color: '#2ca83c',
      tag: '打赏'
    },
    //使用自定义图标 + 标签
    {
      name: 'GitHub',
      link: '',
      icon: 'https://i.theojs.cn/logo/github.svg',
      tag: 'Github'
    },
    //使用自定义图标 + 深浅模式 + 标签
    {
      name: 'GitHub',
      link: '',
      light: 'https://i.theojs.cn/logo/github.svg',
      dark: 'https://i.theojs.cn/logo/github-dark.svg',
      tag: 'Github'
    }
  ]"
/>

---

<Links
  :items="[
    {
      name: '支付宝',
      link: 'https://www.alipay.com',
      icon: 'fab fa-alipay',
      color: '#00a1e9'
    },
    {
      name: '微信支付',
      link: 'https://pay.weixin.qq.com',
      icon: 'fab fa-weixin',
      color: '#2ca83c'
    },
    {
      name: '支付宝',
      link: 'https://www.alipay.com',
      icon: 'https://i.theojs.cn/logo/github.svg'
    },
    {
      name: '支付宝',
      link: 'https://www.alipay.com',
      light: 'https://i.theojs.cn/logo/github.svg',
      dark: 'https://i.theojs.cn/logo/github-dark.svg'
    },
    { name: '支付宝', link: 'https://www.alipay.com' }
  ]"
/>

## 视频

**输入**

```html
<iframe
  loading="lazy"
  src="//player.bilibili.com/player.html?aid=1205847484"
  width="100%"
  height="400"
  frameborder="0"
  allowfullscreen="true"
></iframe>
```

**输出**

<iframe
  loading="lazy"
  src="//player.bilibili.com/player.html?aid=1205847484"
  width="100%"
  height="400"
  frameborder="0"
  allowfullscreen="true"
></iframe>

### 或者使用组件

**输入**

```vue
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

## 容器

**输入**

```md
::: info
[这是一个链接](https://doc.theojs.cn/)
:::

::: tip
[这是一个链接](https://doc.theojs.cn/)
:::

::: warning
[这是一个链接](https://doc.theojs.cn/)
:::

::: danger
[这是一个链接](https://doc.theojs.cn/)
:::

::: details
[这是一个链接](https://doc.theojs.cn/)
:::
```

**输出**
::: info
[这是一个链接](https://doc.theojs.cn/)
:::

::: tip
[这是一个链接](https://doc.theojs.cn/)
:::

::: warning
[这是一个链接](https://doc.theojs.cn/)
:::

::: danger
[这是一个链接](https://doc.theojs.cn/)
:::

::: details
[这是一个链接](https://doc.theojs.cn/)
:::

## 自定义容器

**输入**

````md
::: danger STOP
[这是一个链接](https://doc.theojs.cn/)
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
````

**输出**
::: danger STOP
[这是一个链接](https://doc.theojs.cn/)
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::

## GitHub 风格容器

**输入**

```md
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```

**输出**

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

## 团队页面

**输入**

```vue
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Theo-Messi.png',
    name: 'Theo',
    title: 'Author',
    links: [{ icon: 'github', link: 'https://github.com/Theo-Messi' }]
  }
]
</script>

<VPTeamMembers size="small" :members="members" />
```

**输出**

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Theo-Messi.png',
    name: 'Theo',
    title: 'Author',
    links: [
      { icon: 'github', link: 'https://github.com/Theo-Messi' },
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />

## 图片浅色与深色模式

**输入**

```md
<!-- 浅色模式 -->

![浅色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU){.light-only}

<!-- 深色模式 -->

![深色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU){.dark-only}
```

```md
<!-- 深色模式 -->

![深色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

<!-- 浅色模式 -->

![浅色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)
```

**输出**

<!-- 浅色模式 -->

![浅色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU){.light-only}

<!-- 深色模式 -->

![深色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU){.dark-only}

<!-- 深色模式 -->

![深色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

<!-- 浅色模式 -->

![浅色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)
