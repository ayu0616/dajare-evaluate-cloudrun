import { DajarePair } from "../types";

abstract class DajareScore {
	/**基本点か重み点か */
	abstract readonly type: "base" | "weight";
	pair: DajarePair;

	constructor(dajarePair: DajarePair) {
		this.pair = dajarePair;
	}

	abstract calcPoint(): number;
}

export default DajareScore;
