# vite-plugin-pdf

[![version](https://img.shields.io/npm/v/vite-plugin-pdf?color=rgb%2850%2C203%2C86%29&label=vite-plugin-pdf)](https://www.npmjs.com/package/vite-plugin-pdf) [![CI](https://github.com/yjl9903/vite-plugin-pdf/actions/workflows/ci.yml/badge.svg)](https://github.com/yjl9903/vite-plugin-pdf/actions/workflows/ci.yml)

Export PDF bundled by Vite.

## Installation

```bash
npm i -D playwright vite-plugin-pdf
```

```ts
// vite.config.ts

import { defineConfig } from 'vite';

import PDF from 'vite-plugin-pdf';

export default defineConfig({
  plugins: [
    /**
     * It will generate a pdf at './index.pdf' for the index page ('/') of your app
     */
    PDF({
      outDir: './',
      pages: '/'
    })
  ]
});
```

## License

MIT License © 2021 [XLor](https://github.com/yjl9903)
