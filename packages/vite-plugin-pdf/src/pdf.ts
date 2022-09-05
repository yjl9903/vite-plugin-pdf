import path from 'path';
import colors from 'picocolors';
import { preview } from 'vite';

import type { PageConfig, UserConfig } from './types';

import { info, println } from './utils';

export async function exportPDF(option: Required<UserConfig>) {
  console.log();
  info(colors.yellow('Start exporting PDFs...'));

  if (!option.pages) {
    return;
  }
  const pages = resolvePages(option.pages);

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
    info(
      colors.green(`Browser is launched. (${browser.browserType().name()} ${browser.version()})`)
    );

    const page = await context.newPage();

    info(`${colors.yellow('Exporting PDFs...')} ${colors.blue(`(${pages.length})`)}`);
    for (const p of pages) {
      await page.goto(p.url, { waitUntil: 'networkidle' });
      const output = path.join(option.outDir, p.name);
      await page.pdf({ ...option.pdf, path: output });
      println(
        `${colors.cyan(p.url)} -> ${path.dirname(output)}/${colors.cyan(path.basename(output))}`
      );
    }
    browser.close();
  }

  server.httpServer.close();

  info(colors.green('Export PDFs finished.'));
}

async function launch() {
  const { chromium } = await import('playwright');
  const browser = await chromium.launch();
  return browser;
}

function resolvePages(page: UserConfig['pages']): Required<PageConfig>[] {
  const resolvePath = (path: string) => {
    path = path.replace(/\\/g, '/');
    if (path.endsWith('/')) path += 'index';
    if (path.startsWith('/')) path = path.slice(1);
    path = path.replace(/\//g, '__');
    return path;
  };

  const ensureExt = (path: string) => (path.endsWith('.pdf') ? path : path + '.pdf');

  if (typeof page === 'string') {
    return [
      {
        name: ensureExt(resolvePath(page)),
        url: page
      }
    ];
  } else if (Array.isArray(page)) {
    return page.map((page) => {
      if (typeof page === 'string') {
        return {
          name: ensureExt(resolvePath(page)),
          url: page
        };
      } else {
        return {
          name: ensureExt(page.name ?? resolvePath(page.url)),
          url: page.url
        };
      }
    });
  } else {
    return [
      {
        name: ensureExt(page.name ?? resolvePath(page.url)),
        url: page.url
      }
    ];
  }
}
