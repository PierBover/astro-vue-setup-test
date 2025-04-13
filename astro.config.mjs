// @ts-check
import {fileURLToPath, URL} from 'node:url';
import { defineConfig } from 'astro/config'

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: [
      AutoImport({
        imports: ['vue', 'vue-router']
      }),
      Components({})
    ]
  }
});