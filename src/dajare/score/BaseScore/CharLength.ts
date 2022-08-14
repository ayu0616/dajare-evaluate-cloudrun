import BaseScore from "./BaseScore";

class CharLength extends BaseScore {
	calcPoint(): number {
		const dajareLenList = this.pair.map((item) => item.dajare.length);
		return (Math.min(...dajareLenList)-1)**2;
	}
}

export default CharLength;
