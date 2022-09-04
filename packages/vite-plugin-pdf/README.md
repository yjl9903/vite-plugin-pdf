# vite-plugin-pdf

[![version](https://img.shields.io/npm/v/vite-plugin-pdf?color=rgb%2850%2C203%2C86%29&label=vite-plugin-pdf)](https://www.npmjs.com/package/vite-plugin-pdf) [![CI](https://github.com/yjl9903/vite-plugin-pdf/actions/workflows/ci.yml/badge.svg)](https://github.com/yjl9903/vite-plugin-pdf/actions/workflows/ci.yml)

:construction: Work in progress.

Export PDF bundled by Vite.

## Installation

```bash
npm i -D puppeteer vite-plugin-pdf
```

```ts
// vite.config.ts

import { defineConfig } from 'vite';

import PDF from 'vite-plugin-pdf';

export default defineConfig({
  plugins: [
    PDF({})
  ]
});
```

## License

MIT License © 2021 [XLor](https://github.com/yjl9903)
