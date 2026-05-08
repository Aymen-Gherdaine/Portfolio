/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aymen-portfolio-bucket.s3.ca-central-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
