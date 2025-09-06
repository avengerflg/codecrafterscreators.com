/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  transpilePackages: ["@monorepo/ui", "@monorepo/utils"],
  images: {
    domains: ["localhost"],
    unoptimized: true, // Required for static export
  },
  env: {
    CUSTOM_KEY: "my-value",
  },
};

module.exports = nextConfig;
