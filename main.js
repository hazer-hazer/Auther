const auther = require('./src/auther.js');

// const input = `
// \\documentclass{article}

// \\begin{document}
// AHAHAHAHHAHAHAHAAHAHAH
// \\end{document}
// `;
// const output = 'pdf.pdf';

// auther(input, output, () => {});

const text = `
[Alice]
[/Alice]
`;

console.log(auther(text));