// Crea ../www-build: tutto il JavaScript in un file, compatibile anche con WebView più vecchie.
import { build } from 'esbuild';
import { cpSync, mkdirSync, readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, '..', 'www');
const out = join(here, '..', 'www-build');
if (existsSync(out)) rmSync(out, { recursive: true });
mkdirSync(out, { recursive: true });
await build({
  entryPoints: [join(src, 'js', 'main.js')],
  bundle: true, minify: true, format: 'esm', target: ['chrome80', 'safari14', 'firefox80'],
  outfile: join(out, 'app.js'), legalComments: 'none', logLevel: 'warning', nodePaths: [join(here, 'node_modules')],
});
for (const d of ['css', 'fonts', 'img']) cpSync(join(src, d), join(out, d), { recursive: true });
cpSync(join(src, 'manifest.webmanifest'), join(out, 'manifest.webmanifest'));
cpSync(join(src, 'lib', 'THREE-LICENSE.txt'), join(out, 'THREE-LICENSE.txt'));
let html = readFileSync(join(src, 'index.html'), 'utf8');
html = html.replace(/<script type="importmap">[\s\S]*?<\/script>\n?/, '').replace('src="js/main.js"', 'src="app.js"');
writeFileSync(join(out, 'index.html'), html);
console.log('Fatto: www-build/');
