import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { useEffect } from 'react';

function mySchoolClubApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const loader = document.getElementById('globalLoader');
			if (loader) loader.remove();
		}
	}, []);

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link
					rel="shortcut icon"
					href="favicon.ico"
					type="image/x-icon"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default mySchoolClubApp;
