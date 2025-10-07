import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";
// import { cloudflare } from "@cloudflare/vite-plugin";
import vercel from "vite-plugin-vercel";
import { freshSSG } from "@m4rocks/fresh-ssg";

export default defineConfig({
	server: {
		port: 3000
	},
	plugins: [fresh({
		routeDir: "./src/routes",
		islandsDir: "./src/components/islands",
		clientEntry: "./src/client.ts"
	}), tailwindcss(), vercel(), freshSSG()],
	vercel: {
		distContainsOnlyStatic: true,
		rewrites: [
			{ source: "/:path", destination: "/:path.html" },
			{ source: "/(.*)", destination: "/api/handler" }
		],
		cleanUrls: true,
		trailingSlash: false,
		additionalEndpoints: [
			{
				source: "./handler.js",
				destination: "/api/handler"
			}
		],
	}
});
