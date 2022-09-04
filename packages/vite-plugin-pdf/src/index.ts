import type { Plugin } from 'vite';

export default function PDF(): Plugin {
  return {
    name: 'vite-plugin-pdf',
    apply: 'build',
    async closeBundle() {}
  };
}
