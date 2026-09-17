import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { parse } from '@babel/parser';

const root = new URL('../', import.meta.url);
const xml = value => String(value).replace(/[<>&"']/g, char => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
})[char]);

// Read the same lists as the router without executing React components or assets.
export async function readPageList(section) {
  const source = await readFile(new URL(`src/${section}/${section}_list.jsx`, root), 'utf8');
  const ast = parse(source, { sourceType: 'module', plugins: ['jsx'] });
  const declaration = ast.program.body.flatMap(node => node.declarations || [])
    .find(node => node.id.name === `${section}_list`);
  if (declaration?.init.type !== 'ArrayExpression') throw new Error(`Invalid ${section} list`);
  return declaration.init.elements.map(node => {
    if (node.type !== 'ObjectExpression') throw new Error(`Expected a static ${section} entry`);
    const fields = Object.fromEntries(node.properties.map(property => {
      if (property.type !== 'ObjectProperty' || property.computed) {
        throw new Error(`Expected static properties in ${section} list`);
      }
      return [property.key.name || property.key.value, property.value];
    }));
    const result = { hasPage: Boolean(fields.element) };
    for (const key of ['link', 'title', ...(section === 'notes' ? ['date'] : [])]) {
      if (fields[key]?.type !== 'StringLiteral') throw new Error(`Missing literal ${section}.${key}`);
      result[key] = fields[key].value;
    }
    return result;
  });
}

export function publicationDate(value) {
  const date = new Date(`${value.replace(/(\d+)(st|nd|rd|th)\b/g, '$1')} 00:00:00 GMT`);
  if (Number.isNaN(date.getTime())) throw new Error(`Invalid publication date: ${value}`);
  return date.toISOString().slice(0, 10);
}

export function createSitemap({ origin, notes, work, misc, now = new Date() }) {
  const site = new URL(origin);
  if (site.protocol !== 'https:' || site.pathname !== '/' || site.search || site.hash) {
    throw new Error('Site URL must be an HTTPS origin without a path, query, or fragment');
  }
  const entries = ['/', '/notes', '/work', '/contact', '/work/resume',
    ...work.filter(page => page.hasPage).map(page => `/work/${page.link}`),
    ...misc.filter(page => page.hasPage).map(page => `/misc/${page.link}`),
  ].map(path => ({ path }));
  for (const note of notes.filter(page => page.hasPage)) {
    const date = publicationDate(note.date);
    const age = now.getTime() - Date.parse(date);
    entries.push({ path: `/notes/${note.link}`, note, date, news: age >= 0 && age < 172800000 });
  }
  if (entries.filter(entry => entry.news).length > 1000) throw new Error('News sitemap exceeds 1,000 articles');
  if (new Set(entries.map(entry => entry.path)).size !== entries.length) throw new Error('Duplicate sitemap URL');
  return '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n'
    + entries.map(entry => `  <url>\n    <loc>${xml(new URL(entry.path, site).href)}</loc>\n`
      + (entry.news ? '    <news:news>\n'
        + '      <news:publication><news:name>Joe Moran Online</news:name><news:language>en</news:language></news:publication>\n'
        + `      <news:publication_date>${entry.date}</news:publication_date>\n`
        + `      <news:title>${xml(entry.note.title)}</news:title>\n`
        + '    </news:news>\n' : '')
      + '  </url>\n').join('') + '</urlset>\n';
}

export async function generateSitemap(origin) {
  const [notes, work, misc] = await Promise.all(['notes', 'work', 'misc'].map(readPageList));
  const sitemap = createSitemap({ origin, notes, work, misc });
  await mkdir(new URL('dist/', root), { recursive: true });
  await writeFile(new URL('dist/sitemap.xml', root), sitemap);
  await writeFile(new URL('dist/robots.txt', root), `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', origin).href}\n`);
}
