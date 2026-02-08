import arinspection from './projects/arinspection.js';
import archviz from './projects/archviz.js';
import archvizproj from './projects/archviz-proj.js';
import metaverse from './projects/metaverse.js';
import webxr from './projects/webxr.js';
import lowpolyassets from './projects/lowpoly-assets.js';
import ludikid from './projects/ludikid.js';
import processing from './projects/processing.js';

export const projects = [
  arinspection,
  archviz,
  archvizproj,
  metaverse,
  webxr,
  lowpolyassets,
  ludikid,
  processing
].filter(p => p.show !== false);

// Debug: Print all project IDs and titles
projects.forEach((p, index) => {
  console.log(`Index ${index}: ID=${p.id}, Title=${p.title}`);
});

// Extra: Find duplicate IDs
const seen = new Set();
projects.forEach((p) => {
  if (seen.has(p.id)) {
    console.warn(`⚠️ Duplicate ID found: ${p.id} (${p.title})`);
  } else {
    seen.add(p.id);
  }
});