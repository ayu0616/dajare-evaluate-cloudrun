import DajareScore from "../DajareScore";

abstract class WeightScore extends DajareScore {
	readonly type = "weight";

	abstract weight(): number;
}

export default WeightScore;
