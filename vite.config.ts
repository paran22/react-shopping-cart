import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: [
			{ find: '@api', replacement: '/src/api' },
			{ find: '@components', replacement: '/src/components' },
			{ find: '@assets', replacement: '/src/assets' },
		],
	},
});
