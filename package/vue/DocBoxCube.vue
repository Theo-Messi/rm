<script lang="ts">
import { defineComponent } from 'vue'

/**
 * Item 接口定义了一个项目的结构。
 * @interface Item
 * @property {string} icon - 图标的 URL 或类名。
 * @property {string} name - 项目的名称。
 * @property {string} link - 项目的链接。
 * @property {string} [desc] - 项目的描述（可选）。
 * @property {string} [color] - 图标的颜色（可选）。
 * @property {string} [light] - 浅色模式下的图标 URL（可选）。
 * @property {string} [dark] - 深色模式下的图标 URL（可选）。
 */
interface Item {
  icon: string
  name: string
  link: string
  desc?: string
  color?: string
  light?: string
  dark?: string
}

/**
 * 定义并导出 BoxCube 组件。
 * @component
 */
export default defineComponent({
  name: 'BoxCube',
  props: {
    /**
     * 项目数组，类型为 Item[]，且为必需属性。
     * @type {Array<Item>}
     */
    items: {
      type: Array as () => Item[],
      required: true
    }
  },
  methods: {
    /**
     * 判断给定的 URL 是否为图像文件。
     * @param {string} url - 要判断的 URL。
     * @returns {boolean} 如果 URL 是图像文件，则返回 true，否则返回 false。
     */
    isImage(url: string): boolean {
      return (
        typeof url === 'string' &&
        /\.(png|jpe?g|gif|svg|webp|bmp|tif?f|tiff|ico)(\?.*)?$/.test(url)
      )
    }
  }
})
</script>

<template>
  <div class="container">
    <a
      v-for="(item, index) in items"
      :key="item.name + index"
      class="link"
      :href="item.link"
      :name="item.name"
      :title="item.name"
      target="_blank"
    >
      <span v-if="isImage(item.icon)">
        <img :src="item.icon" alt="icon" class="img" />
      </span>
      <span v-else class="icon">
        <i :class="item.icon + ' fa-2xl'" :style="{ color: item.color }"></i>
      </span>
      <img
        v-if="item.light"
        :src="item.light"
        alt="icon"
        class="img light-only"
      />
      <img v-if="item.dark" :src="item.dark" alt="icon" class="img dark-only" />
      <span class="name">{{ item.name }}</span>
      <span class="desc">{{ item.desc }}</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
:root:not(.dark) .dark-only {
  display: none;
}

:root:is(.dark) .light-only {
  display: none;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.link {
  margin-top: 1rem;
  width: 7.5rem;
  height: 7.5rem;
  border: 1px dotted var(--vp-c-bg-alt);
  background-color: var(--vp-c-bg-alt);
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    border-color: var(--vp-c-brand-1);
  }

  .icon {
    margin-top: -1rem;
    color: var(--vp-c-text-1);
  }

  .img {
    width: 2rem;
    margin-top: -1rem;
  }

  .name {
    position: absolute;
    font-size: 0.87rem;
    bottom: 1.25rem;
  }

  .desc {
    position: absolute;
    font-size: 0.75rem;
    bottom: 0.15rem;
    color: var(--vp-c-text-3);
  }
}
</style>
