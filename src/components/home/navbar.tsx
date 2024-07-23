import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/navbar.module.css';

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>mySchoolClub</div>
			<div
				className={`${styles.hamburger} ${
					isMenuOpen ? styles.open : ''
				}`}
				onClick={toggleMenu}
			>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</div>
			<ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/about/features">Features</Link>
				</li>
				<li>
					<Link href="/about/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
