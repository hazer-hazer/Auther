const latex = require('./latex');

const lex = input => {
	var expressions = [];
	var i = 0,
		c = '';

	const peek = () => c = input[i];
	const advance = () => c = input[++i];
	const end = () => i >= input.length;

	const isnwl = (s = c) => s === '\n';


	const parse = () => {
		if()else{
			var text = '';
			while(!is_punct(peek()) && !end())
				text += peek();
			return { type: 'text', val: text };
		}
	};

	while(!end())
		expressions.push(parse());

	return expressions;
};

module.exports = lex;

// module.exports = (input, output, cb) => {
// 	latex(input, output, () => {
// 		console.log('Latex -> PDF Converted');
// 		if(typeof cb === 'function')
// 			cb();
// 	});
// };