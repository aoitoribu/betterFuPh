import path from 'node:path'
import { docsDir, scanContentFiles, siteUrl, writeGeneratedFile } from './shared.ts'

function absoluteUrl(route: string): string {
  return new URL(route.replace(/^\//, ''), siteUrl).toString()
}

const files = await scanContentFiles()
const urls = files
  .filter((file) => file.extension === '.md')
  .map((file) => ({ loc: absoluteUrl(file.route), updatedAt: file.updatedAt }))

urls.push({ loc: siteUrl, updatedAt: new Date() })

const body = urls
  .sort((a, b) => a.loc.localeCompare(b.loc))
  .map((url) => [
    '  <url>',
    `    <loc>${url.loc}</loc>`,
    `    <lastmod>${url.updatedAt.toISOString()}</lastmod>`,
    '  </url>'
  ].join('\n'))
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`

await writeGeneratedFile(path.join(docsDir, 'public/sitemap.xml'), xml)
console.log(`Generated sitemap with ${urls.length} URLs.`)

