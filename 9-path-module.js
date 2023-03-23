const path = require('path');

console.log(path.sep);

// return \content\subfolder\text.txt
const filePath = path.join('/content', 'subfolder', 'text.txt');
console.log(filePath);

// return text.txt
const base = path.basename(filePath);
console.log(base);

// return C:\Users\vcv\Desktop\tutorial\content\subfolder\text.txt
const absolulte = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolulte);
