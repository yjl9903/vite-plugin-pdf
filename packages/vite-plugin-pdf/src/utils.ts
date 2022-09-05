import colors from 'picocolors';

export function info(message: string) {
  console.log(`${colors.dim('[vite-plugin-pdf]')} ${message}`);
}

export function println(message: string) {
  console.log(message);
}
