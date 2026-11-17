import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Плагін підключає підтримку React до сервера розробки та збірки Vite.
// Це налаштування інструмента, а не компонент сторінки.
export default defineConfig({
  plugins: [react()],
});
