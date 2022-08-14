import { DajarePair } from "../../types";
import WeightScore from "./WeightScore";

/**「ー」が余分に入ったダジャレは減点 */
class Tyouon extends WeightScore {
	private readonly tyouon = "ー";

	/**「ー」が余分に入ったダジャレは減点 */
	constructor(dajarePair: DajarePair) {
		super(dajarePair)
	}

	calcPoint(): number {
		const dajareCount = this.pair.length;
		const firstItemLength = this.pair[0].dajare.length;
		if (this.pair.filter((item) => item.dajare.length === firstItemLength).length === dajareCount) {
			return 1;
		} else if (this.pair.filter((item) => item.dajare.includes(this.tyouon)).length >= 1) {
			return this.weight();
		} else {
			return 1;
		}
	}

	weight(): number {
		return 0.8;
	}
}

export default Tyouon;
