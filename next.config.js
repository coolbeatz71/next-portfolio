import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
    enabled:
        process.env.BUNDLE_ANALYZE === "browser" ||
        process.env.BUNDLE_ANALYZE === "server",
    openAnalyzer: true
});

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
    images: {
        formats: ["image/avif", "image/webp"]
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    typescript: {
        ignoreBuildErrors: true
    }
};

export default withBundleAnalyzer(nextConfig);
