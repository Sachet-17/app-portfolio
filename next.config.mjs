import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [],
	},
};

export default withContentlayer(nextConfig);
