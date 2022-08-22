import { Button, Modal } from "react-bootstrap";
import { DajarePair } from "../../dajare/types";
import DetailAccordion from "./DetailAccordion";
import DetailItem from "./DetailItem";

const ScoreModal = (props: { show: boolean; onHide: () => void; score: number; dajarePairs: DajarePair[]; dajare: string; anotherDajareBtnOnClick: () => void }) => {
	return (
		<Modal centered show={props.show} onHide={props.onHide} scrollable>
			<Modal.Header closeButton>ダジャレのスコア</Modal.Header>
			<Modal.Body className="">
				<h5>あなたのスコアは</h5>
				<p className="fs-1 text-center">{props.score}点</p>
				<p>ダジャレ：{props.dajare}</p>

				<DetailAccordion>
					{props.dajarePairs.map((pair, index) => (
						<DetailItem dajarePair={pair} key={index} />
					))}
				</DetailAccordion>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={props.onHide}>
					閉じる
				</Button>
				<Button onClick={props.anotherDajareBtnOnClick}>他のダジャレで挑戦</Button>
			</Modal.Footer>
		</Modal>
	);
};
export default ScoreModal;
