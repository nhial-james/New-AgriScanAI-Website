const fs = require('fs');

const components = [
  'ICCF2025.jsx',
  'KenyaSoftwareAISummit2025.jsx',
  'AgriFin2025.jsx',
  'FoundersLive2025.jsx',
  'Finas2025.jsx',
  'AIKigali2025.jsx'
];

components.forEach(comp => {
  try {
    const content = fs.readFileSync(`C:/Users/Nhial/Desktop/GP/AgriScanAI-NewWebsite/full_${comp}.txt`, 'utf8');
    const matches = content.match(/"[^"]*\.(png|jpe?g|webp)"/ig);
    const unique = [...new Set(matches)].filter(m => !m.includes('img_'));
    console.log(`\nImages in ${comp}:`);
    unique.forEach(img => console.log(img));
  } catch(e) {}
});
