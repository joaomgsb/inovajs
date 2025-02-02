import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // Garante caminhos corretos no Netlify

  build: {
    outDir: "dist", // Netlify usa "dist" como diretório de publicação
  },

  server: {
    host: "0.0.0.0", // Usa IPv4 para evitar problemas no Netlify
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" ? componentTagger() : null, // Carrega apenas no dev
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
