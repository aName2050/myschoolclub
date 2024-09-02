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
			{
				protocol: 'https',
				hostname: 'static.vecteezy.com',
				pathname:
					'/system/resources/previews/021/468/870/original/man-thinks-holds-clipboard-pen-in-hands-png.png',
			},
		],
	},
};

export default nextConfig;
