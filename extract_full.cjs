const fs = require('fs');
const content = fs.readFileSync('C:/Users/Nhial/Downloads/public_html/public_html/assets/index-BAPKjWeP.js', 'utf8');

// The ICCF component might start with something like "AgriScanAI at the International Conference on Contract Farming (ICCF) 2025" or similar in the helmet/title
const searchStr = "Events - AgriScanAI"; // Wait, that's the index page.
// Let's search for "November 18–19, 2025"
const idx = content.indexOf("November 18–19, 2025");
if (idx !== -1) {
  const chunk = content.substring(Math.max(0, idx - 5000), idx + 20000);
  fs.writeFileSync('C:/Users/Nhial/Desktop/GP/AgriScanAI-NewWebsite/full_iccf.txt', chunk);
  console.log('Saved to full_iccf.txt');
} else {
  console.log('Not found');
}
