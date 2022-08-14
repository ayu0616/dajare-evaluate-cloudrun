class CharChain extends Array<string> {
	constructor(sentence: string) {
		if (typeof sentence !== "string") {
			throw Error("入力は文字列のみです");
		}
		const charList = sentence.split("");
		super(...charList);
	}

	/** 引数の文章から隣り合ったn文字の組み合わせのリストを返す */
	createChain(n: number) {
		const charChain: string[] = [];
		if (this.length < n) {
			throw Error("文字数が多すぎます");
		}
		for (let i = 0; i < this.length - n + 1; i++) {
			charChain.push(this.slice(i, i + n).join(""));
		}
		return charChain;
	}

	override slice(start?: number, end?: number): string[] {
		if (typeof start === "undefined") {
			return [...this];
		}
		const arr = [];
		if (typeof end === "undefined") {
			end = this.length;
		}
		for (let i = start; i < end; i++) {
			arr.push(this[i]);
		}
		return arr;
	}
}

export default CharChain;
