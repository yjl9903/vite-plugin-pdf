import path from 'path';
import colors from 'picocolors';
import { preview } from 'vite';

import type { UserConfig } from './types';

export async function exportPDF(option: Required<UserConfig>) {
  console.log();
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
  const baseURL = `http://${addr.address}:${addr.port}`;

  info(colors.green(`Preview server is created.`));

  {
    info(colors.yellow('Launch browser...'));
    const browser = await launch();
    const context = await browser.newContext({
      baseURL,
      deviceScaleFactor: 1
    });
    info(colors.green('Browser is launched.'));

    const page = await context.newPage();
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.pdf({ ...option.pdf, path: path.join(option.outDir, './output.pdf') });
    browser.close();
  }

  server.httpServer.close();

  info(colors.green('Export PDF finished.'));
}

function info(message: string) {
  console.log(`[vite-plugin-pdf] ${message}`);
}

async function launch() {
  const { chromium } = await import('playwright');
  const browser = await chromium.launch();
  return browser;
}
