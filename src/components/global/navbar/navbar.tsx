import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/component-styles/navbar.module.css';

// components
import Logo from '@/components/global/logo';
import Hamburger from '@/components/global/navbar/hamburger';

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			const navbar = document.querySelector(`.${styles.navbar}`)!;
			if (window.scrollY > 1) {
				navbar.classList.add(styles.scrolled);
			} else {
				navbar.classList.remove(styles.scrolled);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	return (
		<nav className={styles.navbar}>
			<Logo></Logo>
			<div className={styles.dynamicMenu}>
				<Hamburger></Hamburger>
				<ul className={styles.navlinks}>
					<li>
						<Link className={styles.link} href="/">
							Home
						</Link>
					</li>
					<li>
						<Link className={styles.link} href="/about">
							About
						</Link>
					</li>
					<li>
						<Link className={styles.link} href="/account/auth">
							Login
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
