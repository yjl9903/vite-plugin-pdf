import colors from 'picocolors';
import { preview } from 'vite';

import type { UserConfig } from './types';

export async function exportPDF(option: Required<UserConfig>) {
  info(colors.yellow('Export PDF...'));
  info(colors.yellow('Create preview server...'));

  const server = await preview({
    preview: {
      open: false
    }
  });

  const addr = server.httpServer.address();
  if (!addr || typeof addr !== 'object') {
    throw new Error('Start preivew server fail');
  }

  info(colors.green(`Preview server is created.`));

  server.httpServer.close();

  info(colors.green('Export PDF finished.'));
}

function info(message: string) {
  console.log(`[vite-plugin-pdf] ${message}`);
}
