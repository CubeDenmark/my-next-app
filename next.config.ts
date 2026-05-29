import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "api.uifaces.co",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  output: 'export', 
  // // for github pages (github static hosting and no custom domain)
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/'
};

export default nextConfig;


// Old method for image source that has been deprecated
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: [
//       'via.placeholder.com', 
//       'img.icons8.com', 
//       'api.uifaces.co', 
//       'randomuser.me'],
//   },
// };

// export default nextConfig;
