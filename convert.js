const fs = require('fs');

const html = fs.readFileSync('stitch_home.html', 'utf8');

// Extract everything between <body...> and </body>
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/);
if (!bodyMatch) {
  console.error("Could not extract body content");
  process.exit(1);
}

let jsxContent = bodyMatch[1];

// Convert class to className
jsxContent = jsxContent.replace(/class=/g, 'className=');

// Replace HTML comments
jsxContent = jsxContent.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

// Fix self closing tags if there are missing ones, but since it's from Stitch it might already be valid XML
// Handle style attributes
jsxContent = jsxContent.replace(/style="([^"]*)"/g, (match, p1) => {
  // convert simple string style to react style object
  const rules = p1.split(';').filter(t => t.trim() !== '');
  const styleObj = {};
  for(let rule of rules) {
    let [key, val] = rule.split(':');
    if (!key || !val) continue;
    key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
    styleObj[key] = val.trim();
  }
  return `style={${JSON.stringify(styleObj)}}`;
});

// Since the whole body is returned, we should wrap it.
const finalCode = `import Image from 'next/image';

export default function Home() {
  return (
    <>
      ${jsxContent}
    </>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', finalCode);
console.log("Converted successfully!");
