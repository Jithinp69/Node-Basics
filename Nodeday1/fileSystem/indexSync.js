var fs = require('fs');
var fileData = fs.readFileSync('data.txt', 'utf-8');
console.log(fileData); 