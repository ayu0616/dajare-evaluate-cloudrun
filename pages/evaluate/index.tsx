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
import PageTitle from "../../src/components/PageTitle";
import { BsArrowDown } from "react-icons/bs";
import EvaluateForm from "../../src/components/evaluate-form/EvaluateForm";
import ScoreModal from "../../src/components/evaluate-score/ScoreModal";

const Home: NextPage = () => {
	const PAGE_TITLE = "ダジャレ採点の祭典";
	const [dajareSentence, setDajareSentence] = useState("");
	const [isKanaDisabled, setIsKanaDisabled] = useState(true);
	const [kanaDajare, setKanaDajare] = useState("");
	const [dajarePairs, setDajarePairs] = useState<DajarePair[]>([]);
	const [totalScore, setTotalScore] = useState(0);
	const [modalShow, setModalShow] = useState(false);

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
			$("#" + SECOND_CONTROL_ID).focus();
		})();
	};

	const secondOnClick = () => {
		const dajarePairsLocal = findDajare(kanaDajare);
		setDajarePairs(dajarePairsLocal);
		// scoreShuffle();
		setTotalScore(calcTotalScore(dajarePairsLocal));
		setModalShow(true);
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

	const clearForm = () => {
		if (!confirm("ダジャレをリセットしますか？")) return;
		setDajareSentence("");
		setIsKanaDisabled(true);
		setKanaDajare("");
		setDajarePairs([]);
		setTotalScore(0);
		setModalShow(false);
	};

	return (
		<>
			<Head>
				<title>{PAGE_TITLE}</title>
			</Head>

			{/* <div className="m-3">
				<h1>{PAGE_TITLE}</h1>
				<hr />
			</div> */}
			<PageTitle title={PAGE_TITLE} />
			<EvaluateForm>
				<Form.Group controlId={FIRST_CONTROL_ID}>
					<Form.Label>
						<span className="fs-5">Step1.</span>
						<br />
						ダジャレを入力
					</Form.Label>
					<InputGroup>
						<AutoResizeTextarea value={dajareSentence} onChange={(e) => setDajareSentence(e.currentTarget.value)} />
						<Button onClick={firstOnClick}>カナに変換</Button>
					</InputGroup>
				</Form.Group>
			</EvaluateForm>
			<div className="d-flex justify-content-center">
				<BsArrowDown className="fs-1" />
			</div>
			<EvaluateForm>
				<Form.Group controlId={SECOND_CONTROL_ID}>
					<Form.Label>
						<span className="fs-5">Step2.</span>
						<br />
						カナを修正（修正がなければそのまま）
					</Form.Label>
					<InputGroup>
						<AutoResizeTextarea value={kanaDajare} disabled={isKanaDisabled} onChange={(e) => setKanaDajare(e.currentTarget.value)} />
						<Button disabled={isKanaDisabled} onClick={secondOnClick}>
							評価する！
						</Button>
					</InputGroup>
				</Form.Group>
			</EvaluateForm>

			{/* 以下スコア表示欄 */}
			{/* <button onClick={() => setModalShow(true)}>show</button> */}
			<ScoreModal show={modalShow} onHide={() => setModalShow(false)} score={totalScore} dajarePairs={dajarePairs} dajare={dajareSentence} anotherDajareBtnOnClick={clearForm} />

			<div className="d-flex justify-content-end">
				<Button className="m-3" variant="danger" onClick={clearForm}>
					リセット
				</Button>
			</div>

			{/* <div className="m-3">
				{dajarePairs.map((pair, index) => (
					<p key={index}>{pair.map((item) => item.dajare).join(", ")}</p>
				))}
			</div> */}
		</>
	);
};

export default Home;
