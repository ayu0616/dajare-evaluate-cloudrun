import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<div className="main-content"><Component {...pageProps} /></div>
		</Layout>
	);
}

export default MyApp;
