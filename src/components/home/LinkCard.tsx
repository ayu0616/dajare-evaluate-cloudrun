import Link from "next/link";
import { ReactNode } from "react";
import { Button, Card } from "react-bootstrap";

const LinkCard = (props: { title: string; children: ReactNode; href: string }) => {
	return (
		<Card className="my-3">
			<Card.Header as="h5">{props.title}</Card.Header>
			<Card.Body>
				<Card.Text>{props.children}</Card.Text>

				<div className="d-flex justify-content-end">
					<Link href={props.href}>
						<Button>ページに進む→</Button>
					</Link>
				</div>
			</Card.Body>
		</Card>
	);
};
export default LinkCard;
