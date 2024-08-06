<script setup lang="ts">
/**
 * 从 VitePress 导入 useData 函数，用于获取当前页面的数据。
 * @module vitepress
 */
import { useData } from 'vitepress'

/**
 * 从 useData 函数中解构出 frontmatter 对象，用于访问页面的元数据。
 * @const {Object} fm - 包含页面 frontmatter 的对象
 * @property {Object} hero - 页面 hero 部分的数据
 * @property {Object} hero.prelink - hero 部分的 prelink 数据
 * @property {string} hero.prelink.link - prelink 的 URL
 * @property {string} hero.prelink.target - prelink 的打开方式（例如 `_blank`）
 * @property {string} hero.prelink.title - prelink 的标题内容
 */
const { frontmatter: fm } = useData()
</script>

<template>
  <a
    v-if="fm.hero.prelink"
    :href="fm.hero.prelink.link"
    :target="fm.hero.prelink.target"
    class="custom-link"
  >
    <span v-html="fm.hero.prelink.title"></span>
  </a>
</template>

<style lang="scss">
.custom-link {
  display: inline-flex;
  align-items: center;
  border-radius: 0.8rem;
  padding: 0.3rem 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  border: 1px solid var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
  text-decoration: none !important;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    border-color: var(--vp-button-alt-hover-border);
    color: var(--vp-button-alt-hover-text);
    background-color: var(--vp-button-alt-hover-bg);
    transform: translateY(-1px);
  }
}
</style>
