import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/global/navbar/navbar';
import Footer from '@/components/global/footer';

const Team: React.FC = () => {
	return (
		<>
			<Head>
				<title>The Team | mySchoolClub</title>
			</Head>
			<Navbar />
			<br />
			<br />
			<h1>Page under construction (about the team)</h1>
			<br />
			<br />
			<Footer />
		</>
	);
};

export default Team;
