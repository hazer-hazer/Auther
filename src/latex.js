const latex = require('node-latex');
const fs = require('fs');
const { Readable } = require('stream');
const path = require('path');

const auther_tex = fs.readFileSync(path.join(__dirname, 'auther.tex'), { encoding: 'utf8' });

module.exports = (tex, output_filename, cb) => {
	console.log('TEX text\n', tex);
	// Set tex
	tex = auther_tex.replace(/\[SCRIPT\]/gm, tex);

	const input = Readable.from(tex);
	const output = fs.createWriteStream(output_filename);

	const pdf = latex(input);

	pdf.pipe(output)
	pdf.on('error', err => console.error(err))
	pdf.on('finish', cb);
};