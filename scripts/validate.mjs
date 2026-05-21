import { readFileSync, statSync } from 'node:fs';

const html = readFileSync('public/index.html', 'utf8');
const css = readFileSync('public/styles.css', 'utf8');
const fragmentTargets = [...html.matchAll(/href="#([^"]+)"/g)].map(([, id]) => id);
const checks = [
  ['single h1', (html.match(/<h1\b/g) || []).length === 1],
  ['title tag', /<title>[^<]{20,70}<\/title>/.test(html)],
  ['meta description', /<meta\s+name="description"\s+content="[^"]{80,170}"/.test(html)],
  ['canonical url', /rel="canonical"/.test(html)],
  ['structured data', /application\/ld\+json/.test(html)],
  ['Open Graph image', /property="og:image"/.test(html)],
  ['responsive viewport', /name="viewport"/.test(html)],
  ['semantic form labels', (html.match(/<label/g) || []).length >= 6],
  ['optimized hero asset under 40KB', statSync('public/assets/custom-pendrives-hero.webp').size < 40_000],
  ['no client javascript bundle', !/<script\s+src=/.test(html)],
  ['mobile breakpoint', /@media \(max-width: 640px\)/.test(css)],
  ['no placeholder example domain', !/yourbrand\.example/.test(html + readFileSync('public/robots.txt', 'utf8') + readFileSync('public/sitemap.xml', 'utf8'))],
  ['all fragment links have targets', fragmentTargets.every((id) => new RegExp(`id="${id}"`).test(html))],
  ['no inactive menu button', !/class="menu-toggle"/.test(html)]
];

const failures = checks.filter(([, ok]) => !ok);
for (const [name, ok] of checks) {
  console.log(`${ok ? '✓' : '✗'} ${name}`);
}
if (failures.length) process.exit(1);
