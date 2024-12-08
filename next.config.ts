import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/jjaramillom.github.io/' : '',
  basePath: isProd ? '/jjaramillom.github.io' : '',
  output: 'export',
};

export default nextConfig;
