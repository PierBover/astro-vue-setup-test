// @ts-check
import { defineConfig } from 'astro/config';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
	plugins: [
	  AutoImport({
		imports: ['vue']
	  }),
	  Components({
		dirs: ['src/vue']
	  })
	]
  }
});