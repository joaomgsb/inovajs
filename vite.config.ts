import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig(({ mode }) => ({
  base: "/",
  build: {
    outDir: "dist",
    minify: false, 
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [
    react(),
    createHtmlPlugin({
      minify: false,
      inject: {
        data: {
          title: "Inova Creator Hub - Plataforma de Inovação e Criação",
          description: "Sua plataforma completa para inovação e desenvolvimento de projetos criativos",
          image: "https://inovajs.com.br/og-image.png",
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
