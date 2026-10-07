import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.BUNDLE_ANALYZE === "browser" || process.env.BUNDLE_ANALYZE === "server",
    openAnalyzer: true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    turbopack: {
        root: import.meta.dirname
    },
    compiler: {
        styledComponents: true
    },
    images: {
        formats: ["image/avif", "image/webp"],
        qualities: [1, 55, 75, 90]
    },
    typescript: {
        ignoreBuildErrors: true
    }
};

export default withBundleAnalyzer(nextConfig);
