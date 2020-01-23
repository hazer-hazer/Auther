const auther = require('./src/auther.js');

const output = 'pdf.pdf';

const text = `
[1] EXT. HOME -- NIGHT
Plain text. And she said:>
AHAHAHAHHAHAHAHAAHAHAH
<

END

[2] ACT TWO
`;

// Test
// console.log(auther(text));


// To pdf
auther(text, output);