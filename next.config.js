/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/color-cert-names-quiz" : "",
  trailingSlash: true,
}
