import { ReactNode } from "react";
import { Form } from "react-bootstrap";

const EvaluateForm = (props: { children: ReactNode }) => {
	return (
		<Form className="m-3 p-3 bg-light bg-gradient shadow-sm" as="div">
			{props.children}
		</Form>
	);
};

export default EvaluateForm;
