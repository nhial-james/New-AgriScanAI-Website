const fs = require('fs');
const content = fs.readFileSync('C:/Users/Nhial/Desktop/GP/AgriScanAI-NewWebsite/full_ICCF2025.jsx.txt', 'utf8');
const matches = content.match(/"[^"]*\.(png|jpe?g|webp)"/ig);
console.log([...new Set(matches)]);
