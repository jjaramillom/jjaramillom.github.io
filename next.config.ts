import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/jjaramillom.github.io/' : '',
  basePath: isProd ? '/jjaramillom.github.io' : '',
};

export default withNextIntl(nextConfig);
