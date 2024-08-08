---
title: 主题配置文件
---

```ts
// theme/index.ts

import '@theo-messi/tm-fe/theme'

// 也可单独引入
import '@theo-messi/tm-fe/scss/colors.scss'
import '@theo-messi/tm-fe/scss/doc.scss'
...
```

:::tip
具体可查看所有主题文件 [tm-fe/theme](https://github.com/Theo-Messi/tm-fe/tree/main/packages/scss)
:::

## 示例

### 容器

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

### 自定义容器

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

### GitHub 风格容器

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

### 图片浅色与深色模式

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
