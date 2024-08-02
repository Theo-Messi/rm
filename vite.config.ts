import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './vue/index.ts',
      name: 'vitepress-theo-package',
      fileName: (format) => `vitepress-theo-package.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'vitepress'],
      output: {
        globals: {
          vue: 'Vue',
          vitepress: 'VitePress'
        }
      }
    }
  }
});
