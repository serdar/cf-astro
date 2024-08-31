import { defineConfig, envField } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  experimental: {
    env: {
      schema: {
        TESTVAR: envField.string({ context: "server", access: "secret" }),
      },
    },
  },
});
