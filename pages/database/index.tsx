import type { NextPage } from "next";
import Head from "next/head";
import PageTitle from "../../src/components/PageTitle";

const Home: NextPage = () => {
	const PAGE_TITLE = "ダジャレデータベース";
	return (
		<div>
			<Head>
				<title>{PAGE_TITLE}</title>
			</Head>
			<PageTitle title={PAGE_TITLE} />
			<div className="m-3 p-3 border border-5">
				<h1 className="text-center">⚠このページは準備中です⚠</h1>
			</div>
		</div>
	);
};

export default Home;
