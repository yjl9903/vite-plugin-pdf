import { defineConfig } from 'vite';

import PDF from 'vite-plugin-pdf';
import Info from 'vite-plugin-info';

export default defineConfig({
  plugins: [
    PDF({
      page: '/',
      pdf: {
        margin: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }
      }
    }),
    Info()
  ]
});
