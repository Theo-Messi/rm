<script setup lang="ts">
import { computed, ref } from 'vue'
import { videoDomains } from './videoDomains'

/**
 * 定义组件的 props 类型。
 * @typedef {Object} Props
 * @property {string} href - 视频链接或目标 URL。
 * @property {string} name - 按钮或链接的显示名称。
 */

/**
 * 获取组件的 props。
 * @type {Props}
 */
const props = defineProps<{
  href: string
  name: string
}>()

/**
 * 计算属性，判断 `href` 是否属于视频域名。
 * @type {ComputedRef<boolean>}
 */
const isVideo = computed(() => {
  return videoDomains.some((domain) => props.href.startsWith(domain))
})

/**
 * 视频播放状态，初始为关闭状态。
 * @type {Ref<boolean>}
 */
const isVideoOpen = ref(false)

/**
 * 切换视频播放状态。
 */
const toggleVideo = () => {
  isVideoOpen.value = !isVideoOpen.value
}
</script>

<template>
  <div class="mp" @click="toggleVideo">
    <div class="cta" :title="props.name">
      <div class="name-container">
        <i v-if="isVideo" class="fas fa-video"></i>
        <div class="name">{{ props.name }}</div>
      </div>
      <i v-if="isVideo && isVideoOpen" class="fas fa-chevron-up"></i>
      <i v-else class="fas fa-chevron-down"></i>
    </div>
    <transition name="slide">
      <div v-if="isVideo && isVideoOpen" class="video-embed">
        <div class="iframe-container">
          <iframe
            loading="lazy"
            title="Gumlet video player"
            :src="props.href"
            class="video-iframe"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.mp {
  margin-top: 1rem;
  cursor: pointer;
  position: relative;
  padding: 1rem 1.25rem;
  border-radius: 0.8rem;
  transition: border-color 0.3s;
  border: 1px dotted var(--vp-c-bg-alt);
  background-color: var(--vp-c-bg-alt);

  &:hover {
    border-color: var(--vp-c-brand-1);
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none !important;

    .name-container {
      display: flex;
      align-items: center;

      .fa-video {
        margin-right: 0.5rem;
        color: var(--vp-c-brand-1);
      }

      .name {
        font-weight: 600;
        transition: border-color 0.3s;
        color: var(--vp-c-brand-1);
      }
    }

    .fa-chevron-up,
    .fa-chevron-down {
      color: var(--vp-c-brand-1);
    }
  }

  .video-embed {
    padding-top: 1rem;

    .iframe-container {
      position: relative;
      width: 100%;
      padding-top: 56.25%;

      .video-iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 0.8rem;
      }
    }
  }
}

.slide-enter,
.slide-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>
