/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    // Allow loading remote images from specific domains
    remotePatterns: [
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
    config.module.rules.push({
      test: /\.(pdf)$/, // Allows importing PDFs as static files
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          publicPath: `/_next/static/files`,
          outputPath: `${isServer ? "../" : ""}static/files`,
        },
      },
    });

    return config;
  },
};

export default nextConfig;