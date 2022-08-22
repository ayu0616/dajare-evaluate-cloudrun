import { ChangeEvent, ChangeEventHandler, CSSProperties, Ref } from "react";
import { Form } from "react-bootstrap";
import $ from "jquery";

declare type FormControlElement = HTMLInputElement | HTMLTextAreaElement;
const AutoResizeTextarea = (props: { id?: string; value?: string | number | string[]; onChange?: ChangeEventHandler<FormControlElement>, disabled?:boolean, ref?:  Ref<HTMLTextAreaElement>}) => {
	const textAreaCss: CSSProperties = {
		resize: "none",
	};

    const fitTextareaHeight = (id: string) => {
        if (!id) {
            console.log("textareaの高さを自動変更するにはidを指定する必要があります")
            return
        }
        let height = 1;
        const selector = "#" + id;
		while (height <= $(selector)[0].scrollHeight + 2) {
			$(selector).outerHeight(height);
			height++;
		}
	};

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		fitTextareaHeight(event.currentTarget.id);
		if (props.onChange) {
			props.onChange(event);
		}
	};

    return <Form.Control id={props.id} type="text" as="textarea" style={textAreaCss} rows={1} value={props.value} onChange={onChange} disabled={ props.disabled} ref={props.ref} />;
};

export default AutoResizeTextarea;
