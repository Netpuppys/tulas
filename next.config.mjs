import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*", // Match all paths (e.g., /images/logo.png)
  //       destination:
  //         "https://cdn.jsdelivr.net/gh/vik-negi/my-assets@main/:path*", // jsDelivr URL
  //     },
  //   ];
  // },
  images: {
    // Allow loading remote images from specific domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tulas.edu.in",
        port: "",
        pathname: "/**", // Allow all paths within the domain
      },
      {
        protocol: "https",
        hostname: "tulas-assets.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**", // Allow all paths within the domain
      },
    ],
    // Remove unoptimized if you want to leverage Next.js image optimization
    unoptimized: true, // Set to false if you want to use Next.js optimization
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push(
      {
        test: /\.(pdf)$/, // Allows importing PDFs as static files
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
            publicPath: `/_next/static/files`,
            outputPath: `${isServer ? "../" : ""}static/files`,
          },
        },
      },
      {
        test: /\.(mp4|webm)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/_next/static/images",
              outputPath: "static/images",
              name: "[name].[ext]",
              esModule: false,
            },
          },
        ],
      }
    );

    return config;
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true, // Automatically opens the report in the browser
})(nextConfig);
// export default nextConfig;
