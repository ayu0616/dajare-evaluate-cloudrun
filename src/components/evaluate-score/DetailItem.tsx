import { DajarePair } from "../../dajare/types";

/**ダジャレの組の中で最も文字数が短いものを返す（「ん」とか「っ」とかが入らない形） */
const findMinLengthDajare = (dajarePair: DajarePair) => {
	const minLength = Math.min(...dajarePair.map((item) => item.dajare.length));
	const minPair = dajarePair.find((item) => item.dajare.length == minLength);
	return minPair.dajare;
};

/**ダジャレペアの中に特定のカタカナが含まれているか判定 */
const includesKana = (dajarePair: DajarePair, kana: string) => {
	const dajareCount = dajarePair.length;
	const re = new RegExp(`[^${kana}]`, "g");
	const removeKanaPair = dajarePair.map((item) => item.dajare.replaceAll(re, ""));
	const firstItemLength = removeKanaPair[0].length;
	if (removeKanaPair.filter((value) => value.length == firstItemLength).length == dajareCount) {
		return "なし";
	} else if (dajarePair.filter((item) => item.dajare.includes(kana)).length >= 1) {
		return "あり";
	} else {
		return "なし";
	}
};

const DetailItem = (props: { dajarePair: DajarePair }) => {
	const dajareString = findMinLengthDajare(props.dajarePair);
	return (
		<>
			<p className="fs-5 m-0">{dajareString}</p>
			<ul className="">
				<li>{dajareString.length}文字</li>
				<li>{props.dajarePair.length}回登場</li>
				<li>「ー」{includesKana(props.dajarePair, "ー")}</li>
				<li>「ッ」{includesKana(props.dajarePair, "ッ")}</li>
			</ul>
		</>
	);
};

export default DetailItem;
