// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server', // 必须是 server，表示开启服务端渲染 (SSR)
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()]
  }
});