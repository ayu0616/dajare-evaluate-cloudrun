import Document, { Html, Head, Main, NextScript } from "next/document";
import NavHeader from "../src/components/NavHeader";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="manifest" href="/manifest.json" />
					<link rel="icon" href="icon-512x512.png" />
					<link rel="apple-touch-icon" href="icon-512x512.png"></link>
				</Head>
				<body>
					<NavHeader></NavHeader>
					<div className="main-content"><Main /></div>
					<NextScript />
					<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" async></script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
