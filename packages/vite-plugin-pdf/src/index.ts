import type { Plugin } from 'vite';

import type { UserConfig } from './types';

import { exportPDF } from './pdf';

export default function PDF(option: UserConfig): Plugin {
  return {
    name: 'vite-plugin-pdf',
    apply: 'build',
    configResolved(config) {
      if (!option.outDir) {
        option.outDir = config.build.outDir;
      }
    },
    async closeBundle() {
      await exportPDF(option as Required<UserConfig>);
    }
  };
}
