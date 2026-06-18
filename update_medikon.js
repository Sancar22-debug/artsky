const fs = require('fs');
const path = require('path');
const projectsDir = '/home/sanjo/Music/ARTSKY/public/imgs/projects';

// Regenerate JSON mapping
const dirs = fs.readdirSync(projectsDir).filter(d => fs.statSync(path.join(projectsDir, d)).isDirectory());
const result = {};
for (const dir of dirs) {
  const dirPath = path.join(projectsDir, dir);
  let files = fs.readdirSync(dirPath)
    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  
  if (dir === 'predgorniy_apartments') {
     const pdfs = files.filter(f => f.includes('_pdf-'));
     const rests = files.filter(f => !f.includes('_pdf-'));
     files = [...pdfs, ...rests];
  }
  
  result[dir] = files.map(f => `/imgs/projects/${dir}/${f}`);
}

const file = '/home/sanjo/Music/ARTSKY/src/components/Projects.tsx';
let content = fs.readFileSync(file, 'utf8');
const mappingStr = JSON.stringify(result, null, 2);
content = content.replace(/const projectImages: Record<string, string\[\]> = \{[\s\S]*?\n\};\n/, 'const projectImages: Record<string, string[]> = ' + mappingStr + ';\n');
fs.writeFileSync(file, content);
console.log('Updated Projects.tsx mapping');
