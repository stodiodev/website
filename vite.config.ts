import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
	server: {
		port: 3000
	},
	plugins: [cloudflare(), fresh({
		routeDir: "./src/routes",
		islandsDir: "./src/components/islands",
		clientEntry: "./src/client.ts"
	}), tailwindcss()],
});
