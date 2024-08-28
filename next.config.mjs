/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'static-00.iconduck.com',
				pathname:
					'/assets.00/qr-code-illustration-2048x1668-wseobvx0.png',
			},
		],
	},
};

export default nextConfig;
