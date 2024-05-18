import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  build: {
    target: 'esnext' //browsers can handle the latest ES features
  },
  plugins: [
    vue(),
    federation({
      name: "host-app",
      remotes: {
        remote: "https://gautam-jha.github.io/mfe-deploy/assets/mfeRemoteEntry.js",
      },
      // shared: ["vue"],
    }),
  ],
});
