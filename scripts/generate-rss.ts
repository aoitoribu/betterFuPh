import path from 'node:path'
import { docsDir, scanContentFiles, siteUrl, writeGeneratedFile } from './shared.ts'

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function absoluteUrl(route: string): string {
  return new URL(route.replace(/^\//, ''), siteUrl).toString()
}

const files = await scanContentFiles()
const items = files
  .filter((file) => file.extension === '.md')
  .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
  .slice(0, 30)
  .map((file) => {
    const link = absoluteUrl(file.route)
    return [
      '    <item>',
      `      <title>${escapeXml(file.title)}</title>`,
      `      <link>${link}</link>`,
      `      <guid>${link}</guid>`,
      `      <pubDate>${file.updatedAt.toUTCString()}</pubDate>`,
      '    </item>'
    ].join('\n')
  })
  .join('\n')

const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>物理学习指南</title>\n    <link>${siteUrl}</link>\n    <description>开放、共享、协作的大学物理知识库</description>\n${items}\n  </channel>\n</rss>\n`

await writeGeneratedFile(path.join(docsDir, 'public/feed.xml'), rss)
console.log('Generated RSS feed.')

