import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginSentry from "vite-plugin-sentry";
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env.local") });


const viteSentryConfig = {
    authToken: process.env.SENTRY_AUTH_TOKEN,
    org: "alex-home-6h",
    project: "javascript-vue",
    release: `${process.env.npm_package_name}@${process.env.npm_package_name_version}`,
    setCommits: {},
    sourceMaps: {
      include: ["./dist/assets"],
      ignore: ["node_modules"],
      urlPrefix: "~/assets",
    },
};


export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue(), vitePluginSentry(viteSentryConfig)],
  build:{
    sourcemap: "hidden",
  },
  define: {

  }
});
