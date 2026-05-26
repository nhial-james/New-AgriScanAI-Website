const fs = require('fs');
const content = fs.readFileSync('C:/Users/Nhial/Downloads/public_html/public_html/assets/index-BAPKjWeP.js', 'utf8');

const regex = /send\(([^)]+)\)/g;
let match;
while ((match = regex.exec(content)) !== null) {
  if (match[1].includes('service_') || match[1].includes('template_')) {
    console.log("Match: ", match[1]);
  }
}

// Also try to find service IDs directly
const svcMatch = content.match(/service_[a-zA-Z0-9]+/g);
console.log("Services:", [...new Set(svcMatch)]);

const tplMatch = content.match(/template_[a-zA-Z0-9]+/g);
console.log("Templates:", [...new Set(tplMatch)]);

// public key usually is a 20+ char string or starts with certain prefixes, let's search for the send signature
const sendMatch = content.match(/\b\w+\.send\s*\(\s*['"](service_[^'"]+)['"]\s*,\s*['"](template_[^'"]+)['"]\s*,.*?['"]([^'"]+)['"]\)/);
if (sendMatch) {
  console.log("Send pattern found:", sendMatch[0]);
}

// look for emailjs.init or similar
const initMatch = content.match(/\w+\.init\(['"]([^'"]+)['"]\)/);
if (initMatch) {
  console.log("Init pattern found:", initMatch[1]);
}
