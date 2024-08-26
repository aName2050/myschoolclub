import React from 'react';
import Head from 'next/head';

// components
import Navbar from '@/components/global/navbar/navbar';
import Image from 'next/image';
import Footer from '@/components/global/footer';
import Banner from '@/components/landing/banner';

const Home: React.FC = () => {
	return (
		<>
			<Head>
				<title>mySchoolClub</title>
			</Head>
			<Navbar></Navbar>
			<Banner></Banner>
			<br />
			<br />
			<br />
			<Footer></Footer>
		</>
	);
};

export default Home;
