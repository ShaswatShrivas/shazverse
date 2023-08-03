/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
        serverActions: true,
    },
    images:{
        domains:['occ-0-3933-116.1.nflxso.net','occ-0-116-448.1.nflxso.net']
    }
}

module.exports = nextConfig
