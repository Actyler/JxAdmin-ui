import { defineConfig, loadEnv } from '@vben/vite-config';

import ElementPlus from 'unplugin-element-plus/vite';

export default defineConfig(async () => {
  const env = loadEnv();

  return {
    application: {},
    vite: {
      plugins: [
        ElementPlus({
          format: 'esm',
        }),
      ],
      server: {
        proxy: {
          [env.VITE_GLOB_API]: {
            changeOrigin: true,
            // rewrite: (path) => path.replace(/^\/api/, ''),
            rewrite: (path) => path.replace(`/^${env.VITE_GLOB_API}`, ''),
            //  https安全
            secure: false,
            // mock代理目标地址
            target: env.VITE_GLOB_API_URL,
            ws: true,
          },
        },
      },
    },
  };
});
