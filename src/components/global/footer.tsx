import React from 'react';
import Link from 'next/link';
import styles from '@/styles/component-styles/footer.module.css';

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<p>&copy; 2024 mySchoolClub</p>
		</footer>
	);
};

export default Footer;
