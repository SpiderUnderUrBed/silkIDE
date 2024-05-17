// svelte.config.js
import adapter from '@sveltejs/adapter-static';

/** @type {import("@sveltejs/kit").Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			strict: false
		}),
		alias: {
			$css: 'src/css'
		}
	}
};

export default config;
