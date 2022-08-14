import { IpadicFeatures } from "kuromoji";
import tokenizer from "./tokenizer";
class KuromojiToken implements IpadicFeatures {
	word_id: number;
	word_type: string;
	word_position: number;
	surface_form: string;
	pos: string;
	pos_detail_1: string;
	pos_detail_2: string;
	pos_detail_3: string;
	conjugated_type: string;
	conjugated_form: string;
	basic_form: string;
	reading?: string | undefined;
	pronunciation?: string | undefined;
	constructor(token: IpadicFeatures) {
		this.word_id = token.word_id;
		this.word_type = token.word_type;
		this.word_position = token.word_position;
		this.surface_form = token.surface_form;
		this.pos = token.pos;
		this.pos_detail_1 = token.pos_detail_1;
		this.pos_detail_2 = token.pos_detail_2;
		this.pos_detail_3 = token.pos_detail_3;
		this.conjugated_type = token.conjugated_type;
		this.conjugated_form = token.conjugated_form;
		this.basic_form = token.basic_form;
		this.reading = token.reading;
		this.pronunciation = token.pronunciation;
	}

	static fromArray(arr: IpadicFeatures[]) {
		return arr.map((value) => new KuromojiToken(value));
	}

	static async tokenize(text: string) {
		const kuromoji = await tokenizer();
		return KuromojiToken.fromArray(kuromoji.tokenize(text));
	}
}

export default KuromojiToken;
