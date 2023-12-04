import { defineConfig } from 'dumi';
import { resolve } from 'path';

const name = 'utils';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name,
    socialLinks: {
      github: `https://github.com/dxsixpc/${name}`,
    },
    logo: 'https://v2static.epub360.com/epub360.ico',
  },
  favicons: [`/${name}/epub360.ico`],
  base: `/${name}/`,
  publicPath: `/${name}/`,
  alias: {
    '@21epub/utils': resolve(__dirname, './src'),
    src: resolve(__dirname, './src'),
    docs: resolve(__dirname, './docs'),
  },
});
