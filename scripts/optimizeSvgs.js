import fs from 'fs';
import path from 'path';
import processSvg from './render/processSvg';
import { readSvgDirectory, writeSvgFile } from './helpers';

const ICONS_DIR = path.resolve(process.cwd(), 'icons');

console.log(`Optimizing SVGs...`);

const svgFiles = readSvgDirectory(ICONS_DIR);

svgFiles.forEach(svgFile => {
  const content = fs.readFileSync(path.join(ICONS_DIR, svgFile));
  processSvg(content).then(svg => writeSvgFile(svgFile, ICONS_DIR, svg));
});
