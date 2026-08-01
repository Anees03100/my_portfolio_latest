/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: {
    devIndicators: false, // Disables the build/status indicator
    appIsrStatus: false, // Disables the build/status indicator
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
