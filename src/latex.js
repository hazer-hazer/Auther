const latex = require('node-latex');
const fs = require('fs');
const { Readable } = require('stream')

module.exports = (tex, output_filename, cb) => {
	const input = Readable.from(tex);
	const output = fs.createWriteStream(output_filename);	

	const pdf = latex(input);

	pdf.pipe(output)
	pdf.on('error', err => console.error(err))
	pdf.on('finish', cb);
};