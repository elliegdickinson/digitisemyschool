// Builds the site into docs/ (what GitHub Pages publishes) and stamps a fresh
// version on the CSS and JS links so visitors never see a stale cached copy.
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const run = cmd => execSync(cmd, { stdio: 'inherit' });
run(`npx esbuild src/main.jsx --bundle --minify --jsx=automatic --define:process.env.NODE_ENV='"production"' --outfile=docs/app.js`);
run('npx tailwindcss -i src/styles.css -o docs/styles.css --minify');

const v = Date.now();
const file = 'docs/index.html';
const html = readFileSync(file, 'utf8')
  .replace(/styles\.css(\?v=\d+)?"/, `styles.css?v=${v}"`)
  .replace(/app\.js(\?v=\d+)?"/, `app.js?v=${v}"`);
writeFileSync(file, html);
console.log('Built docs/ (version ' + v + ')');
