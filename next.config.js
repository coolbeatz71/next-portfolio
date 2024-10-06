/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        esmExternals: false
    },
    swcMinify: true,
    compiler: {
        styledComponents: true
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    typescript: {
        ignoreBuildErrors: true
    },
    transpilePackages: ["gsap"]
};

export default nextConfig;
