/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@monorepo/ui", "@monorepo/utils"],
  images: {
    domains: ["localhost", "codecrafterscreators.com"],
  },
  env: {
    CUSTOM_KEY: "my-value",
  },
};

module.exports = nextConfig;
