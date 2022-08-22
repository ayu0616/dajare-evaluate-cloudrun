import type { NextPage } from "next";
import Head from "next/head";
import LinkCard from "../src/components/home/LinkCard";
import PageTitle from "../src/components/PageTitle";

const Home: NextPage = () => {
	const PAGE_TITLE = "ダジャリストの部屋";
	return (
		<div>
			<Head>
				<title>{PAGE_TITLE}</title>
			</Head>
			<PageTitle title={PAGE_TITLE} />
			<div className="m-3">
				<LinkCard title="採点の祭典" href="./evaluate">
					ここではあなたのダジャレを採点することができます！<br />
					高得点の人には特典があるかも？（ない）
				</LinkCard>
				<LinkCard title="ダジャレDB" href="./database">
					（※準備中）
				</LinkCard>
			</div>
		</div>
	);
};

export default Home;
