import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	plugins: [react()],
	server: {
		// port: 3000,
		proxy: {
			"/api": "http://localhost:5000",
			"/add": "http://localhost:5000",
			"/posts": "http://localhost:5000",
			"/update": "http://localhost:5000",
		},
	},
});
