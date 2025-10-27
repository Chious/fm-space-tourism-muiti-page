// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";
import { imagetools } from "vite-imagetools";

const env = loadEnv("", process.cwd(), "");

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: env.SITE_URL || "YOUR_GITHUB_URL_HERE",
  base: env.BASE_PATH || "YOUR_REPO_HERE",
  vite: {
    plugins: [tailwindcss(), imagetools()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@components": fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      },
    },
  },

  integrations: [react()],
});
