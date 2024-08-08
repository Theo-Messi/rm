---
title: 页脚配置
---

## 效果图

![](https://i.theojs.cn/docs/202408081933196.png)

## 创建数据

在`.vitepress`目录下新建`data/fooertData.ts`文件，并添加以下内容：

```ts
// .vitepress/data/footerData.ts

export const Footer_Data = {
  beian: { icp: '备案号', police: '公网安备号' },
  author: { name: 'Theo', link: 'https://', time: '2019' },
  group: [
    {
      title: '分组1',
      links: [
        { name: '示例1', href: 'https://' },
        { name: '示例2', href: 'https://' }
      ]
    },
    {
      title: '分组2',
      links: [
        { name: '示例1', href: 'https://' },
        { name: '示例2', href: 'https://' }
      ]
    }
  ]
}
```

## 引入组件

::: tip
`./data/footerData` 可替换为存放数据的路径
:::

```ts
//.vitepress/config.mts
import { defineConfig } from 'vitepress'
export default defineConfig({
  vite: {
    resolve: {
      alias: [
        { find: /^.*\/VPFooter\.vue$/, replacement: '@theo-messi/tm-fe/Footer' }
      ] // [!code ++]
    },
    define: {
      FooterData: JSON.stringify(require('./data/footerData').Footer_Data) // [!code ++]
    }
  }
})
```
