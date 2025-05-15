import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    devIndicators: false,
    rewrites: async () => ([
        { source: "/über", destination: "/about" },
        { source: "/ueber", destination: "/about" },
        { source: "/infos", destination: "/about" },
    ])

};

export default nextConfig;
