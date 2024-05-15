// import { defineConfig } from "vite";
// import { sveltekit } from "@sveltejs/kit/vite";
// import { viteStaticCopy } from 'vite-plugin-static-copy'

// // https://vitejs.dev/config/
// export default defineConfig(async () => ({
//   plugins: [
//     viteStaticCopy({
//       targets: [
//         {src: './src/css/stylesheet_for_ide.css', dest: 'CSS/',}
//       ]
//     }),
//     sveltekit(),
//   ],

//   // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
//   //
//   // 1. prevent vite from obscuring rust errors
//   clearScreen: false,
//   // 2. tauri expects a fixed port, fail if that port is not available
//   server: {
//     port: 1420,
//     strictPort: true,
//     watch: {
//       // 3. tell vite to ignore watching `src-tauri`
//       ignored: ["**/src-tauri/**"],
//     },
//   }
// }));
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()]
});
// import { defineConfig } from "vite";
// import { svelte } from "@sveltejs/vite-plugin-svelte";
// import { viteStaticCopy } from 'vite-plugin-static-copy'

// // https://vitejs.dev/config/
// export default defineConfig(async () => ({
//   plugins: [
//     viteStaticCopy({
//       targets: [
//         {src: './src/css/stylesheet_for_ide.css', dest: 'CSS/',}
//       ]
//     }),
//     svelte(),
//   ],

//   // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
//   //
//   // 1. prevent vite from obscuring rust errors
//   clearScreen: false,
//   // 2. tauri expects a fixed port, fail if that port is not available
//   server: {
//     port: 1420,
//     strictPort: true,
//     watch: {
//       // 3. tell vite to ignore watching `src-tauri`
//       ignored: ["**/src-tauri/**"],
//     },
//   },
//   build: {
//     target: 'esnext',
//     rollupOptions: {
//       external: ['@tauri-apps/api/path', '@tauri-apps/api/core'],
//       input: {
//         app: 'src/main.html', // Specify the correct input file path
//         // svelteComponent: 'src/silkide.svelte', // Add Svelte component as an entry point
//         script: 'src/main.js',
//       },
//       outDir: 'dist', // Specify the output directory
//       assetsDir: 'assets' // Specify the directory for static assets (e.g., CSS, images)
//     },
//   }
// }));
