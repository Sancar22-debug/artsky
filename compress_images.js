const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = '/home/sanjo/Music/ARTSKY/public/imgs/projects';

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        const isAlreadyWebp = ext === '.webp';
        // If it's already a compressed webp from our script (we'll suffix it or just convert everything to .min.webp)
        // Let's output to .webp and delete original.
        const originalName = path.basename(file, path.extname(file));
        const outPath = path.join(dir, `${originalName}.webp`);
        
        // Skip if this is a webp file we just generated, but to be safe we'll process it to a temp file then move it.
        const tempPath = path.join(dir, `_temp_${originalName}.webp`);

        try {
          console.log(`Processing: ${fullPath}`);
          await sharp(fullPath)
            .resize({ width: 1920, withoutEnlargement: true })
            .webp({ quality: 80, effort: 4 })
            .toFile(tempPath);
          
          // Delete original
          fs.unlinkSync(fullPath);
          // Rename temp to out
          fs.renameSync(tempPath, outPath);
        } catch (err) {
          console.error(`Failed to process ${fullPath}:`, err.message);
          if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
      }
    }
  }
}

async function main() {
  console.log("Starting image compression...");
  await processDirectory(rootDir);
  console.log("Compression complete!");

  // Now regenerate the mapping
  const dirs = fs.readdirSync(rootDir).filter(d => fs.statSync(path.join(rootDir, d)).isDirectory());
  const result = {};
  for (const dir of dirs) {
    const dirPath = path.join(rootDir, dir);
    const files = fs.readdirSync(dirPath)
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })); // Better sorting for numbered files
    result[dir] = files.map(f => `/imgs/projects/${dir}/${f}`);
  }

  fs.writeFileSync(
    path.join('/home/sanjo/Music/ARTSKY', 'projectImages_all.json'),
    JSON.stringify(result, null, 2)
  );
  console.log("Generated mapping with ALL images.");
}

main().catch(console.error);
