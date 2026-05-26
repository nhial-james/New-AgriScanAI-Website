const fs = require('fs');

const content = fs.readFileSync('C:/Users/Nhial/Downloads/public_html/public_html/assets/index-BAPKjWeP.js', 'utf8');

const regex = /data-component-file":"([^"]+)".*?data-component-content":"([^"]+)"/g;

const events = [
  'ICCF2025.jsx',
  'KenyaSoftwareAISummit2025.jsx',
  'AgriFin2025.jsx',
  'FoundersLive2025.jsx',
  'Finas2025.jsx',
  'AIKigali2025.jsx'
];

const extractedText = {};
events.forEach(e => extractedText[e] = []);

let match;
while ((match = regex.exec(content)) !== null) {
  const file = match[1];
  if (events.includes(file)) {
    try {
      const decodedStr = decodeURIComponent(match[2]);
      const data = JSON.parse(decodedStr);
      if (data.textContent) {
        extractedText[file].push(data.textContent);
      }
    } catch (e) {
      // ignore
    }
  }
}

fs.writeFileSync('extracted_events.json', JSON.stringify(extractedText, null, 2));
console.log('Extraction complete. Check extracted_events.json');
