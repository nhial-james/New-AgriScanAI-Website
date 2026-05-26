const fs = require('fs');
const content = fs.readFileSync('C:/Users/Nhial/Downloads/public_html/public_html/assets/index-BAPKjWeP.js', 'utf8');

const index = content.indexOf('service_11ah9yu');
if (index > -1) {
  console.log("Full config:", content.substring(index - 20, index + 200));
}
