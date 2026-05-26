const fs = require('fs');
const content = fs.readFileSync('C:/Users/Nhial/Downloads/public_html/public_html/assets/index-BAPKjWeP.js', 'utf8');

const components = [
  'ICCF2025.jsx',
  'KenyaSoftwareAISummit2025.jsx',
  'AgriFin2025.jsx',
  'FoundersLive2025.jsx',
  'Finas2025.jsx',
  'AIKigali2025.jsx'
];

components.forEach(comp => {
  const str = `data-component-path":"src\\\\pages\\\\Events\\\\${comp}"`;
  const first = content.indexOf(str);
  const last = content.lastIndexOf(str);
  if (first !== -1 && last !== -1) {
    const chunk = content.substring(Math.max(0, first - 1500), last + 1500);
    fs.writeFileSync(`C:/Users/Nhial/Desktop/GP/AgriScanAI-NewWebsite/full_${comp}.txt`, chunk);
    console.log(`Extracted full ${comp}`);
  } else {
    console.log(`Failed for ${comp}`);
  }
});
