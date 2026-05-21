import { existsSync, readFileSync, statSync } from 'node:fs';

const page = readFileSync('app/page.tsx', 'utf8');
const layout = readFileSync('app/layout.tsx', 'utf8');
const css = readFileSync('app/globals.css', 'utf8');
const robots = readFileSync('app/robots.ts', 'utf8');
const sitemap = readFileSync('app/sitemap.ts', 'utf8');
const pkg = readFileSync('package.json', 'utf8');
const source = [page, layout, css, robots, sitemap, pkg].join('\n');
const fragmentTargets = [...page.matchAll(/href="#([^"]+)"/g)].map(([, id]) => id);
const checks = [
  ['Next.js dependency', /"next"\s*:/.test(pkg)],
  ['App Router page', existsSync('app/page.tsx') && existsSync('app/layout.tsx')],
  ['single h1', (page.match(/<h1\b/g) || []).length === 1],
  ['metadata title', /title:\s*'[^']{20,70}'/.test(layout)],
  ['metadata description', /description/.test(layout)],
  ['canonical metadata', /canonical:\s*'\/'/.test(layout)],
  ['structured data', /application\/ld\+json/.test(page)],
  ['absolute Open Graph image URL', /url:\s*`\$\{siteUrl\}\/assets\/og-custom-pendrives\.webp`/.test(layout)],
  ['responsive viewport', /initialScale:\s*1/.test(layout)],
  ['semantic form labels', (page.match(/<label/g) || []).length >= 6],
  ['optimized hero asset under 40KB', statSync('public/assets/custom-pendrives-hero.webp').size < 40_000],
  ['uses next/image for hero', /import Image from 'next\/image'/.test(page) && /<Image[\s\S]*priority/.test(page)],
  ['server component only', !/['\"]use client['\"]/.test(page + layout)],
  ['mobile breakpoint', /@media \(max-width: 640px\)/.test(css)],
  ['no placeholder example domain', !/yourbrand\.example/.test(source)],
  ['all fragment links have targets', fragmentTargets.every((id) => new RegExp(`id="${id}"`).test(page))],
  ['metadata robots route', /MetadataRoute\.Robots/.test(robots)],
  ['metadata sitemap route', /MetadataRoute\.Sitemap/.test(sitemap)],
  ['no static html entrypoint', !existsSync('public/index.html') && !existsSync('public/styles.css')]
];

const failures = checks.filter(([, ok]) => !ok);
for (const [name, ok] of checks) {
  console.log(`${ok ? '✓' : '✗'} ${name}`);
}
if (failures.length) process.exit(1);
