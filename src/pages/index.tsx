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
			<InfoSeg imagePos="left" />
			<br />
			<Footer />
		</>
	);
};

export default Home;
