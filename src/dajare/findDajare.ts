import CharChain from "./CharChain";
import { DajarePair, DajarePairItem } from "./types";
import { REPLACER_RE_STRING } from "./constants";


const doFind = (kanaSentence: string) => {
	const sentenceLength = kanaSentence.length;
	const charChain = new CharChain(kanaSentence);
	const pairCandidates: DajarePairItem[][] = [];

	for (let i = sentenceLength - 1; i >= 2; i--) {
		/**i文字のchain */
		const iChain = charChain.createChain(i);
		iChain.forEach((value, index) => {
			const equalCandidate = pairCandidates.find((item) => item[0].dajare.match(new RegExp("^" + value.replaceAll(new RegExp(REPLACER_RE_STRING, "g"), "").split("").join(REPLACER_RE_STRING) + "$")));
			if (equalCandidate) {
				equalCandidate.push({ start: index, end: index + i - 1, dajare: value });
			} else {
				pairCandidates.push([{ start: index, end: index + i - 1, dajare: value }]);
			}
		});
	}

	const pairs: DajarePair[] = pairCandidates.filter((pair) => pair.length >= 2);
	return pairs;
};

const removeDuplicate = (dajarePairs: DajarePair[]) => {
	const adoptedPairs: DajarePair[] = [];
	dajarePairs.forEach((pair) => {
		let isExists = false;
		adoptedPairs.forEach((adoptedPair) => {
			const isEqualLength = pair.length === adoptedPair.length;
			const isIncludes = adoptedPair[0].dajare.replaceAll(new RegExp(REPLACER_RE_STRING, "g"), "").includes(pair[0].dajare.replaceAll(new RegExp(REPLACER_RE_STRING, "g"), ""));
			isExists = isExists || (isEqualLength && isIncludes);
		});
        if(!isExists){
            adoptedPairs.push(pair)
        }
	});
    return adoptedPairs
};

const findDajare = (kanaSentence: string) => {
	const pairs: DajarePair[] = doFind(kanaSentence);
	// const uniquePairs = [...new Set(pairs.map((pair) => JSON.stringify(pair)))].map((pair) => JSON.parse(pair));
	return removeDuplicate(pairs);
};

export default findDajare;
