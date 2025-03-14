import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true,
            },
            "/public": {
                target: "http://localhost:3000",
                changeOrigin: true,
            },
        },
    },
    // resolve: {
    //     alias: {
    //         '@tanstack/react-router': 'path/to/your/local/copy/or/node_modules/@tanstack/react-router',
    //     },
    // },
    // optimizeDeps: {
    //     exclude: ['@tanstack/react-router'],
    // },
    plugins: [TanStackRouterVite(), react()],
    test: {
        environment: "happy-dom",
        coverage: {
            reporter: ["text", "html", "json"],
        }
    },

});
