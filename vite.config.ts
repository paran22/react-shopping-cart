import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@api', replacement: '/src/api' },
      { find: '@components/layout', replacement: '/src/components/layout' },
      { find: '@components/ui', replacement: '/src/components/ui' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@types', replacement: '/src/types' },
      { find: '@hooks', replacement: '/src/hooks' },
    ],
  },
});
