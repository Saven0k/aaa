import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api/add": "http://localhost:5000",
			"/api/posts": "http://localhost:5000",
			"/api/update": "http://localhost:5000",
			"/api/delete": "http://localhost:5000",
			"/api/data": "http://localhost:5000",
			"/api/users": "http://localhost:5000",
			"/api/addUser": "http://localhost:5000",
			"/api/updateUser": "http://localhost:5000",
			"/api/deleteUser": "http://localhost:5000",
			"/api/userFind": "http://localhost:5000",
		},
	},
});
