import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {

    // images: {
    //     domains: ['utfs.io'],
    // },


    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
            }
        ],
    },
};

export default withNextVideo(nextConfig);