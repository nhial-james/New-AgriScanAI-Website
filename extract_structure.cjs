const fs = require('fs');
const content = fs.readFileSync('C:/Users/Nhial/Downloads/public_html/public_html/assets/index-BAPKjWeP.js', 'utf8');

const searches = [
  { name: 'Kenya', str: 'AgriScanAI proudly participated in the' },
  { name: 'AgriFin', str: '9th Annual AgriFin Learning Event' },
  { name: 'FoundersLive', str: 'winner of Founders Live Nairobi' },
  { name: 'Finas', str: 'Financing Agri-Food Systems Sustainably (FINAS)' },
  { name: 'AIKigali', str: 'inaugural Global AI Summit on Africa' }
];

searches.forEach(s => {
  const idx = content.indexOf(s.str);
  if (idx !== -1) {
    const chunk = content.substring(Math.max(0, idx - 4000), idx + 8000);
    fs.writeFileSync(`C:/Users/Nhial/Desktop/GP/AgriScanAI-NewWebsite/${s.name}_structure.txt`, chunk);
    console.log(`Saved chunk to ${s.name}_structure.txt`);
  } else {
    console.log(`String not found for ${s.name}`);
  }
});
