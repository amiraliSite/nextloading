import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // این خط مهم است برای gh-pages
  basePath: '/nextloading', // نام مخزن گیت‌هاب شما
  assetPrefix: '/nextloading', // برای لود درست فایل‌های استاتیک
};

export default nextConfig;