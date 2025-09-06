/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ["@monorepo/ui", "@monorepo/utils"],
  images: {
    domains: ["localhost"],
  },
  env: {
    CUSTOM_KEY: "my-value",
  },
};

module.exports = nextConfig;
