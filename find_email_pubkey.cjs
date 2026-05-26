const fs = require('fs');
const content = fs.readFileSync('C:/Users/Nhial/Downloads/public_html/public_html/assets/index-BAPKjWeP.js', 'utf8');

const regex = /send\(\s*["']service_[^'"]+["']\s*,\s*["']template_[^'"]+["']\s*,\s*[^,]+\s*,\s*["']([^'"]+)["']/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log("Found publicKey in send:", match[1]);
}

// Another possible pattern
const initMatch = content.match(/init\(['"]([^'"]+)['"]/);
if (initMatch) {
  console.log("Found publicKey in init:", initMatch[1]);
}

// Or it's just a 20-22 character random string passed as the last argument
const lastArgRegex = /service_11ah9yu["'].{0,50}["']([^'"]{15,25})["']/g;
while ((match = lastArgRegex.exec(content)) !== null) {
  console.log("Possible public key:", match[1]);
}

// Let's just print a 200 character window around "service_11ah9yu"
const index = content.indexOf('service_11ah9yu');
if (index > -1) {
  console.log("Context around service:", content.substring(index - 100, index + 100));
}

const index2 = content.lastIndexOf('service_11ah9yu');
if (index2 > -1 && index2 !== index) {
  console.log("Context around service2:", content.substring(index2 - 100, index2 + 100));
}
