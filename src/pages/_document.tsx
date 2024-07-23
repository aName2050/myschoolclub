import Document, { Html, Head, Main, NextScript } from 'next/document';

class mySchoolClubDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta
						name="description"
						content="Your club management app for school."
					/>
					<meta
						name="keywords"
						content="high school, club, management"
					/>
					<meta name="author" content="Bardia Shafaee" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default mySchoolClubDocument;
