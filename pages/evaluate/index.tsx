import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import findDajare from "../../src/dajare/findDajare";
import KuromojiToken from "../../src/dajare/KuromojiToken";
import { DajarePair } from "../../src/dajare/types";
import $ from "jquery";
import { sleep } from "../../src/helper";
import AutoResizeTextarea from "../../src/components/AutoResizeTextarea";
import calcTotalScore from "../../src/dajare/score/calcTotalScore";

const Home: NextPage = () => {
	const PAGE_TITLE = "ダジャレ評価";
	const [dajareSentence, setDajareSentence] = useState("");
	const [isKanaDisabled, setIsKanaDisabled] = useState(true);
	const [kanaDajare, setKanaDajare] = useState("");
	const [dajarePairs, setDajarePairs] = useState<DajarePair[]>([]);
	const [totalScore, setTotalScore] = useState(0);

	const FIRST_CONTROL_ID = "dajare";
	const SECOND_CONTROL_ID = "fixing-kana";

	const firstOnClick = () => {
		(async () => {
			setIsKanaDisabled(true);
			setKanaDajare("変換中...");
			const token = await KuromojiToken.tokenize(dajareSentence);
			const kana = token.map((value) => value.reading).join("");
			setKanaDajare(kana);
			setIsKanaDisabled(false);
			await sleep(1 / 10 ** 10);
			fitTextareaHeight("#" + SECOND_CONTROL_ID);
		})();
	};

	const secondOnClick = () => {
		const dajarePairsLocal = findDajare(kanaDajare);
		setDajarePairs(dajarePairsLocal);
		// scoreShuffle();
		setTotalScore(calcTotalScore(dajarePairsLocal));
	};

	const fitTextareaHeight = (selector: string) => {
		let height = 1;
		while (height <= $(selector)[0].scrollHeight + 2) {
			$(selector).outerHeight(height);
			height++;
		}
	};

	const scoreShuffle = async () => {
		for (let i = 0; i < 10; i++) {
			setTotalScore(Math.floor(Math.random() * 1000));
			await sleep((1 / (11 - i)) * 1.5);
		}
	};

	return (
		<>
			<Head>
				<title>{PAGE_TITLE}</title>
			</Head>

			<div className="m-3">
				<h1>{PAGE_TITLE}</h1>
				<hr />
			</div>
			<Form className="m-3" as="div">
				<Form.Group controlId={FIRST_CONTROL_ID}>
					<Form.Label>ダジャレを入力</Form.Label>
					<InputGroup>
						<AutoResizeTextarea value={dajareSentence} onChange={(e) => setDajareSentence(e.currentTarget.value)} />
						<Button onClick={firstOnClick}>カナに変換</Button>
					</InputGroup>
				</Form.Group>
			</Form>
			<Form className="m-3" as="div">
				<Form.Group controlId={SECOND_CONTROL_ID}>
					<Form.Label>修正するカナがあれば修正してください</Form.Label>
					<InputGroup>
						<AutoResizeTextarea value={kanaDajare} disabled={isKanaDisabled} onChange={(e) => setKanaDajare(e.currentTarget.value)} />
						<Button disabled={isKanaDisabled} onClick={secondOnClick}>
							評価する！
						</Button>
					</InputGroup>
				</Form.Group>
			</Form>

			{/* 以下スコア表示欄 */}
			<div className="m-3">
				<p>あなたのスコアは、、、</p>
				<p className="fs-1 text-center">{totalScore}点</p>
			</div>
			<div className="m-3">
				<p>スコア詳細</p>
			</div>

			<div className="m-3">
				{dajarePairs.map((pair, index) => (
					<p key={index}>{pair.map((item) => item.dajare).join(", ")}</p>
				))}
			</div>
		</>
	);
};

export default Home;
