import { defineConfig } from 'vite';

import PDF from 'vite-plugin-pdf';
import Info from 'vite-plugin-info';

export default defineConfig({
  plugins: [
    PDF({
      page: '/',
      pdf: {
        margin: {
          top: '2.97cm',
          left: '2.1cm',
          bottom: '2.97cm',
          right: '2.1cm'
        }
      }
    }),
    Info()
  ]
});
