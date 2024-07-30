import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/navbar.module.css';

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
			<div className={styles.logo}>
				{/* TODO: replace with logo */}
				<h1>
					<Link
						className={`${styles.link} ${styles.logoLink}`}
						href="/"
					>
						mySchoolClub
					</Link>
				</h1>
			</div>
			<div className={styles.dynamicMenu}>
				<div className={styles.hamburger}>
					<div className={styles.line}></div>
					<div className={styles.line}></div>
					<div className={styles.line}></div>
				</div>
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
