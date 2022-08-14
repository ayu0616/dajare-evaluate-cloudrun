import kuromoji, { TokenizerBuilder, IpadicFeatures, Tokenizer } from "kuromoji";

const builder: TokenizerBuilder<IpadicFeatures> = kuromoji.builder({
	dicPath: "/dictionaries/",
});

const tokenizer = () =>
	new Promise<Tokenizer<IpadicFeatures>>((done) => {
		builder.build((_err, tokenizer) => {
			done(tokenizer);
		});
	});

export default tokenizer;
