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
    const unique = [...new Set(matches)];
    console.log(`\nImages in ${comp}:`);
    unique.forEach(img => {
      // only skip icons
      if (!img.includes('img_phone') && !img.includes('img_vector') && !img.includes('img_social') && !img.includes('img_location') && !img.includes('img_email') && !img.includes('img_check') && !img.includes('img_dashboard') && !img.includes('img_group') && !img.includes('img_account') && !img.includes('img_iphone') && !img.includes('img_macbook') && !img.includes('img_pageviews')) {
         console.log(img);
      }
    });
  } catch(e) {}
});
