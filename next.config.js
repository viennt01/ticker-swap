/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires

const appEnv = process.env.APP_ENV || 'dev';
const version = process.env.VERSION || '0.1.0';

const API_MAIN_GW = {
  dev: 'https://ticketswap.wiki/api',
  staging: 'https://ticketswap.wiki/api',
  production: 'https://ticketswap.wiki/api',
};

const env = {
  VERSION: version,
  APP_ENV: appEnv,
  API_MAIN_GW: API_MAIN_GW[appEnv],
};

const nextConfig = {
  reactStrictMode: false,
  env,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
