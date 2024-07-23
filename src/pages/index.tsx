import React from 'react';
import Head from 'next/head';

// components
import Navbar from '@/components/home/navbar';

const Home: React.FC = () => {
	return (
		<>
			<Head>
				<title>mySchoolClub</title>
			</Head>
			<Navbar></Navbar>
		</>
	);
};

export default Home;
