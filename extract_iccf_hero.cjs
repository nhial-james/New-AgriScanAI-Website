const fs = require('fs');
const content = fs.readFileSync('C:/Users/Nhial/Downloads/public_html/public_html/assets/index-BAPKjWeP.js', 'utf8');
const str = 'data-component-path":"src\\\\pages\\\\Events\\\\ICCF2025.jsx"';
const first = content.indexOf(str);
console.log(content.substring(Math.max(0, first - 1500), first + 3000));
