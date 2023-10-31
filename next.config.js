/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.lazyshop.com', 'bpncxdglixmzbnsbxhqw.supabase.co'],
        minimumCacheTTL: 60,
    },
    experimental: { serverActions: true, },
}

module.exports = nextConfig
