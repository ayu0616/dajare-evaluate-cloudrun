import { ReactNode } from "react";
import { Accordion } from "react-bootstrap";

const DetailAccordion = (props: { children?: ReactNode }) => {
	return (
		<Accordion>
			<Accordion.Item eventKey="0">
				<Accordion.Header>スコアの詳細</Accordion.Header>
				<Accordion.Body>{props.children}</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};

export default DetailAccordion;
