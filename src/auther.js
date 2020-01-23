const latex = require('./latex');

const convert = input => {

	// Useless new lines
	var unl = /\n+/gm;
	input = input.replace(unl, '\n');

	const new_line = /\n/gm;
	input = input.replace(new_line, '\\leavevmode\\\\');

	// Dialogs
	const dialog_begin = /(\w+|)(>)/gm,
		  dialog_end = /(<)/gm;

	input = input.replace(dialog_begin, '\\begin{center}\\textbf{$1}');
	input = input.replace(dialog_end, '\\end{center}');

	// New scene
	const new_scene = /\[(.*?)\]/gm;
	input = input.replace(new_scene, '\\marginnote{$1}');

	return input;
}; 

module.exports = (input, output, cb) => {
	latex(convert(input), output, () => {
		console.log('Latex -> PDF Converted');
		if(typeof cb === 'function')
			cb();
	});
};