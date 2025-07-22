import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Корневой путь для деплоя
  build: {
    outDir: 'dist', // Папка сборки (Vercel ищет её по умолчанию)
  }
});