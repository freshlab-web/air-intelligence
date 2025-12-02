import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: () => "index-BlUHNRk_.js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: assetInfo => {
          const name = assetInfo.name || "";
          if (/\.css$/i.test(name)) {
            return "index-BVC55xHA.css";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
}));
