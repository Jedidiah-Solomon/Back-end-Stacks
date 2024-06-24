import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        host: "0.0.0.0", // Listen on all available network interfaces, host: "localhost" for only local host

        // Configure custom proxies for additional URLs
        proxy: {
            "/localhost": {
                target: "http://localhost:5173",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/localhost/, ""),
            },
        },
    },
});
