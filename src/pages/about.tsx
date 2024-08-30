import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/global/navbar/navbar';
import Footer from '@/components/global/footer';

const About: React.FC = () => {
	return (
		<>
			<Head>
				<title>About | mySchoolClub</title>
			</Head>
			<Navbar />
			<br />
			<br />
			<h1>Page under construction (about)</h1>
			<br />
			<br />
			<Footer />
		</>
	);
};

export default About;
