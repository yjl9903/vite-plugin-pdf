import { defineConfig } from 'vite';

import PDF from 'vite-plugin-pdf';
import Info from 'vite-plugin-info';

export default defineConfig({
  plugins: [PDF({}), Info()]
});
