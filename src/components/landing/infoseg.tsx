import React from 'react';
import styles from '@/styles/component-styles/infoseg.module.css';
import Image from 'next/image';

const InfoSeg: React.FC<ISegInfo> = ({
	imagePos,
	imageSrc,
	imageAlt,
	imageSize,
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
					<div className={styles.text}>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Voluptate adipisci perferendis eos inventore
						consequuntur facilis sapiente consectetur porro amet
						illum odit totam, mollitia consequatur labore
						reprehenderit obcaecati reiciendis magnam iste?
					</div>
				</>
			) : (
				<>
					<div className={styles.text}>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Voluptate adipisci perferendis eos inventore
						consequuntur facilis sapiente consectetur porro amet
						illum odit totam, mollitia consequatur labore
						reprehenderit obcaecati reiciendis magnam iste?
					</div>
					<div className={styles.image}>image goes here</div>
				</>
			)}
		</div>
	);
};

export default InfoSeg;
