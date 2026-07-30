import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/nextloading', // دقیقاً هم‌نام ریپازیتوری جدید
};

export default nextConfig;