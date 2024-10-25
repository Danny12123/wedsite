/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add externals to ignore 'canvas' in the server build
    config.externals = config.externals || [];
    config.externals.push({
      canvas: "commonjs canvas",
    });

    return config;
  },
};

export default nextConfig;
