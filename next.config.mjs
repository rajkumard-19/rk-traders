/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/rk-traders',
  assetPrefix: '/rk-traders/',
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
