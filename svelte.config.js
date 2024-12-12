import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { markdoc } from 'svelte-markdoc-preprocess';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(), 
		markdoc({
			layouts: {
				blog: join(dirname(fileURLToPath(import.meta.url)), './src/lib/markdoc/layouts/Blog.svelte')
			}
		})
	],
    extensions: ['.markdoc', '.svelte'],
	kit: {
		adapter: adapter()
	}
};

export default config;
