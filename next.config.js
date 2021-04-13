const path = require('path')
const withPlugins = require('next-compose-plugins')
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  i18n: {
    locales: ['en', 'zh-TW'],
    defaultLocale: 'en',
    domains: [],
  },
  publicRuntimeConfig: {
    STATIC_FOLDER: '/static',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/global.scss";`,
  },
}

module.exports = withPlugins([bundleAnalyzer], nextConfig)
