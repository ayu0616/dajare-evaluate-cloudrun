import { DajarePair } from "../types";
import BaseScore from "./BaseScore/BaseScore";
import CharLength from "./BaseScore/CharLength";
import PairCount from "./WeightScore/PairCount";
import Sokuon from "./WeightScore/Sokuon";
import WeightScore from "./WeightScore/WeightScore";
import Tyouon from "./WeightScore/Tyouon";

const calcPairScore = (dajarePair: DajarePair) => {
	const scores = {
		charLength: new CharLength(dajarePair),
		pairCount: new PairCount(dajarePair),
		sokuon: new Sokuon(dajarePair),
		tyouon: new Tyouon(dajarePair),
	};

	const baseList: BaseScore[] = [];
	const weightList: WeightScore[] = [];
	Object.values(scores).forEach((score) => {
		if (score.type == "base") baseList.push(score);
		if (score.type == "weight") weightList.push(score);
	});

	const basePoint = (() => {
		let sum = 0;
		baseList.forEach((score) => (sum += score.calcPoint()));
		return sum;
	})();
	const weightPoint = (() => {
		let product = 1;
		weightList.forEach((score) => (product *= score.calcPoint()));
		return product;
	})();

	const score = basePoint * weightPoint;
	// console.log(Object.values(scores).map((score) => score.calcPoint()));
	// console.log({ base: basePoint, weight: weightPoint });
	return score;
};

const calcTotalScore = (dajarePairs: DajarePair[]) => {
	const score = dajarePairs.map((pair) => calcPairScore(pair)).reduce((prev, current) => prev + current, 0);
	const n = 1; // 小数点以下何桁か
	const base = 10 ** n;
	return Math.round(score * base) / base;
};

export default calcTotalScore;
