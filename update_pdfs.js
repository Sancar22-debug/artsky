const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const projectsDir = '/home/sanjo/Music/ARTSKY/public/imgs/projects';
const srcDir = path.join(projectsDir, 'predgorniy_apartments');

async function processPdfImage(filename, targetProject) {
  const inPath = path.join(srcDir, filename);
  if (!fs.existsSync(inPath)) return;
  const outPath = path.join(projectsDir, targetProject, filename.replace('.jpg', '.webp'));
  
  await sharp(inPath)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outPath);
  
  fs.unlinkSync(inPath);
  console.log(`Moved and compressed ${filename} to ${targetProject}`);
}

async function main() {
  // Move 12312131 to ordo
  await processPdfImage('12312131_pdf-1.jpg', 'ordo');
  
  // Move predgornaya to predgorniy (architecture)
  await processPdfImage('predgornaya stroika1_pdf-1.jpg', 'predgorniy');
  
  // The rest stay in predgorniy_apartments
  const others = ['1_pdf-1.jpg', '2_pdf-1.jpg', '52_pdf-1.jpg', '7etaj1_pdf-1.jpg', 'giff_pdf-1.jpg', 'giff_pdf-2.jpg'];
  for (const f of others) {
    await processPdfImage(f, 'predgorniy_apartments');
  }

  // Delete the unwanted numbered architecture ones from predgorniy_apartments
  const toDelete = ['5305721483738945234.webp', '5305721483738945235.webp'];
  for (const f of toDelete) {
    const p = path.join(srcDir, f);
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
      console.log(`Deleted unwanted ${f}`);
    }
  }

  // Regenerate JSON mapping
  const dirs = fs.readdirSync(projectsDir).filter(d => fs.statSync(path.join(projectsDir, d)).isDirectory());
  const result = {};
  for (const dir of dirs) {
    const dirPath = path.join(projectsDir, dir);
    let files = fs.readdirSync(dirPath)
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
    
    // Sort so PDF images (the floor plans) appear first for predgorniy_apartments
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
  const newContent = content.replace(/const projectImages: Record<string, string\[\]> = \{[\s\S]*?\n\};\n/, 'const projectImages: Record<string, string[]> = ' + mappingStr + ';\n');
  fs.writeFileSync(file, newContent);
  console.log('Updated Projects.tsx with new mappings');
}

main().catch(console.error);
