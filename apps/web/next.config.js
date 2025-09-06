/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@monorepo/ui", "@monorepo/utils"],
  images: {
    domains: ["localhost"],
  },
  env: {
    CUSTOM_KEY: "my-value",
  },
};

module.exports = nextConfig;
