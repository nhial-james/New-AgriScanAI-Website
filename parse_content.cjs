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
  const content = fs.readFileSync(`C:/Users/Nhial/Desktop/GP/AgriScanAI-NewWebsite/full_${comp}.txt`, 'utf8');
  
  // Find the start of the prose section
  const proseIdx = content.indexOf('className:"prose prose-lg max-w-none');
  if (proseIdx === -1) {
    console.log(`Could not find prose in ${comp}`);
    return;
  }
  
  // Extract a chunk starting from prose
  const chunk = content.substring(proseIdx, content.indexOf('className:"mt-16"', proseIdx) || proseIdx + 10000);
  
  // The chunk is minified JS. Let's just find all data-component-content JSON strings
  const regex = /data-component-content":"(%\w\w.*?)",/g;
  let match;
  let lines = [];
  
  while ((match = regex.exec(chunk)) !== null) {
    try {
      const decoded = decodeURIComponent(match[1]);
      const obj = JSON.parse(decoded);
      
      if (obj.elementName === 'p' || obj.elementName === 'h2' || obj.elementName === 'h3' || obj.elementName === 'ul' || obj.elementName === 'li' || obj.elementName === 'img' || obj.elementName === 'strong') {
        let text = obj.textContent || '';
        let type = obj.elementName;
        lines.push(`[${type}] ${text}`);
      }
    } catch (e) {
      // Ignore parse errors
    }
  }
  
  fs.writeFileSync(`C:/Users/Nhial/Desktop/GP/AgriScanAI-NewWebsite/parsed_${comp}.txt`, lines.join('\n'));
});

console.log("Done parsing");
