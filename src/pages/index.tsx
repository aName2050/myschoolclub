import React from 'react';
import Head from 'next/head';

// components
import Navbar from '@/components/global/navbar/navbar';
import Footer from '@/components/global/footer';
import Banner from '@/components/landing/banner';
import InfoSeg from '@/components/landing/infoseg';

const Home: React.FC = () => {
	const handleButtonClick = () => {
		alert('hello world!');
	};

	return (
		<>
			<Head>
				<title>mySchoolClub</title>
			</Head>
			<Navbar />
			<Banner />
			<br />
			<InfoSeg
				imagePos="left"
				imageSrc="https://static-00.iconduck.com/assets.00/qr-code-illustration-2048x1668-wseobvx0.png"
				imageAlt="hand holding phone with QR code"
				imageSize={{ width: 500, height: 450 }}
			/>
			<br />
			<InfoSeg
				imagePos="right"
				imageSrc=""
				imageAlt="no image"
				imageSize={{ width: 300, height: 200 }}
			/>
			<br />
			<br />
			<Footer />
		</>
	);
};

export default Home;
