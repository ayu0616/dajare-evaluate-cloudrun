import WeightScore from "./WeightScore";

class PairCount extends WeightScore {
	weight(): number {
		return (this.pair.length - 1) ** 2;
	}

	calcPoint(): number {
		return this.weight();
	}
}

export default PairCount;
