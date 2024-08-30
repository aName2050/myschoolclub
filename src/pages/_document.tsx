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
					<meta name="author" content="Compacted Software" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
				<div id="globalLoader">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
						alt=""
					/>
				</div>
			</Html>
		);
	}
}

export default mySchoolClubDocument;
