/** @type {import('next').NextConfig} */
const nextConfig = {
    swc: true,
    reactStrictMode: true,
    experimental: {
        esmExternals: false,
    },
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
