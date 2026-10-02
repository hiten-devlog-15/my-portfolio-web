import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const framesDir = path.join(__dirname, '../public/video-frames');
const files = fs.readdirSync(framesDir);

const pngFiles = files.filter(f => f.endsWith('.png')).sort();

const manifest = {
  totalFrames: pngFiles.length,
  frames: pngFiles.map(f => `/video-frames/${f}`)
};

fs.writeFileSync(
  path.join(__dirname, '../src/frameManifest.json'),
  JSON.stringify(manifest, null, 2)
);
