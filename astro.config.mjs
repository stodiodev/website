// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
	integrations: [react(), db()],
	server: {
		port: 3000
	},
	site: "http://localhost:3000",
	vite: {
		plugins: [tailwindcss()]
	},

	adapter: cloudflare()
});
