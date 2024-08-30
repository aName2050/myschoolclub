import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/global/navbar/navbar';
import Footer from '@/components/global/footer';

const Company: React.FC = () => {
	return (
		<>
			<Head>
				<title>Company | mySchoolClub</title>
			</Head>
			<Navbar />
			<br />
			<br />
			<h1>Page under construction (about the company)</h1>
			<br />
			<br />
			<Footer />
		</>
	);
};

export default Company;
