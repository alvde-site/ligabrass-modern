import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // Вырезает HTML-комментарии при сборке проекта
    {
      name: 'html-clean-comments',
      transformIndexHtml(html) {
        return html.replace(/<!--[\s\S]*?-->/g, '');
      }
    }
  ],
  base: '/'
});
