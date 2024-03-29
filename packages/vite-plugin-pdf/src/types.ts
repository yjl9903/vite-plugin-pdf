import type { Page } from 'playwright';

export interface UserConfig {
  outDir?: string;

  pages: string | PageConfig | string[] | PageConfig[];

  /**
   * Options passed to page.pdf()
   */
  pdf?: Omit<Parameters<Page['pdf']>[0], 'path'>;
}

export interface PageConfig {
  /**
   * Exported PDF filename
   *
   * @default 'output.pdf'
   */
  name?: string;

  /**
   * The URL of the page you want to export
   */
  url: string;
}
