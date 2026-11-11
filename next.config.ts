import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BUILD_TIME: Date.now().toString(),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/logos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/deals/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=60, stale-while-revalidate=300",
          },
        ],
      },
      {
        source: "/store/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=60, stale-while-revalidate=300",
          },
        ],
      },
    ];
  },
    async redirects() {
    return [
      {
        source: "/go/candy-in-bulk",
        destination: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
        permanent: false,
      },
      {
        source: "/go/candyinbulk",
        destination: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/coupons/:slug",
        destination: "/deals/:slug",
      },
      {
        source: "/store/:slug",
        destination: "/deals/:slug",
      },
    ];
  },
};

export default nextConfig;
