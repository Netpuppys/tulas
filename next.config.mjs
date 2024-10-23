/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tulas.edu.in",
        port: "",
        pathname: "/**",
      },
    ],
  },

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
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
