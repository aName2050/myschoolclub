import React from 'react';
import styles from '@/styles/component-styles/infoseg.module.css';
import Image from 'next/image';

const InfoSeg: React.FC<ISegInfo> = ({
	imagePos,
	imageSrc,
	imageAlt,
	imageSize,
	children,
}) => {
	// TODO: finish
	return (
		<div className={styles.container}>
			{imagePos == 'left' ? (
				<>
					<div className={styles.image}>
						<Image
							src={imageSrc}
							width={imageSize.width}
							height={imageSize.height}
							alt={imageAlt}
						/>
					</div>
					<div className={styles.text}>{children}</div>
				</>
			) : (
				<>
					<div className={styles.text}>{children}</div>
					<div className={styles.image}>
						<Image
							src={imageSrc}
							width={imageSize.width}
							height={imageSize.height}
							alt={imageAlt}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default InfoSeg;
