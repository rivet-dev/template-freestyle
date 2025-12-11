import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	root: "src/frontend",
	build: {
		outDir: "../../dist",
	},
	server: {
		host: "0.0.0.0",
		allowedHosts: true,
		port: 3000,
		proxy: {
			"/rivet": {
				target: "http://localhost:6420",
				changeOrigin: true,
				ws: true,
				rewrite: (path) => path.replace(/^\/rivet/, ""),
			},
		},
	},
});
