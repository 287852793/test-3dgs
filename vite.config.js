import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";

const viteConfig = defineConfig(({ command, mode }) => {
  const options = {
    plugins: [
      vue(), {
        name: "configure-response-headers",
        configureServer: (server) => {
          server.middlewares.use((_req, res, next) => {
            res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
            res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
            next();
          });
        },
      }
    ],
    server: {
      host: "0.0.0.0",
      port: 5173,
      strictPort: true,
      cors: true,
      https: false,
      open: false,
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "@components": resolve(__dirname, "src/components"),
      },
    },
  };
  return options;
});

export default viteConfig;
