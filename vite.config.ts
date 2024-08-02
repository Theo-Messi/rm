import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './vue/index.ts',
      name: 'tmfe',
      fileName: (format) => `tmfe.${format}.js`
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
