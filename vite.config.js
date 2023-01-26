import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig(({ mode }) => ({
	plugins: [
		eslint({
			exclude: ['**/node_modules/**'],
			cache: true,
			failOnWarning: mode !== 'development'
		}),
		react()
	]
}));
