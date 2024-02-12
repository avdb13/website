import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import preact from '@astrojs/preact';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), preact({ compat: true })],
});
