import type { Plugin } from 'vite';

import type { UserConfig } from './types';

export default function PDF(option: UserConfig): Plugin {
  let outDir: string;

  return {
    name: 'vite-plugin-pdf',
    apply: 'build',
    configResolved(config) {
      outDir = option.outDir ?? config.build.outDir;
    },
    async closeBundle() {}
  };
}
