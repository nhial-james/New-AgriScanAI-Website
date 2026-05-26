const fs = require('fs');
const content = fs.readFileSync('C:/Users/Nhial/Downloads/public_html/public_html/assets/index-BAPKjWeP.js', 'utf8');

const regex = /.{0,100}Google Play.{0,100}/ig;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log("Match:", match[0]);
}

const soonRegex = /.{0,100}Coming Soon.{0,100}/ig;
while ((match = soonRegex.exec(content)) !== null) {
  console.log("Soon Match:", match[0]);
}
