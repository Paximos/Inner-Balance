// Copies only the public site into dist/ (no design-tool folders, no source scans).
import { cp, mkdir, rm, readdir } from 'node:fs/promises';

const out = 'dist';
const skip = new Set(['admiralty-chart-no-1904-crete-megalo-kastron.jpg']); // source scan for the plates, not shown on the page

await rm(out, { recursive: true, force: true });
await mkdir(`${out}/assets`, { recursive: true });
for (const f of ['index.html', 'styles.css', 'main.js']) await cp(f, `${out}/${f}`);
for (const f of await readdir('assets')) if (!skip.has(f)) await cp(`assets/${f}`, `${out}/assets/${f}`);
console.log(`built ${out}/`);
