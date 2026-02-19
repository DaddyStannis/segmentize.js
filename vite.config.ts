import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dts from "vite-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Segmentize",
      fileName: "segmentize",
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [dts({ rollupTypes: true })],
});
