import { readdir, readFile, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'

export const docsDir = path.resolve('docs')
export const siteBase = '/betterFuPh/'
export const siteUrl = 'https://aoitoribu.github.io/betterFuPh/'

export type ContentFile = {
  absolutePath: string
  relativePath: string
  route: string
  title: string
  extension: string
  section: string
  updatedAt: Date
}

export type SectionConfig = {
  label: string
  directory: string
  indexTitle: string
  indexDescription: string
}

export const sections: SectionConfig[] = [
  {
    label: '课程',
    directory: 'courses',
    indexTitle: '课程总览',
    indexDescription: '这里会自动列出课程目录下的 Markdown 页面与可下载资料。'
  },
  {
    label: '历年真题',
    directory: 'past-exams',
    indexTitle: '历年真题',
    indexDescription: '这里会自动列出真题、答案和参考资料。'
  },
  {
    label: '讲义',
    directory: 'lecture-notes',
    indexTitle: '讲义',
    indexDescription: '这里会自动列出课程讲义和课堂笔记。'
  },
  {
    label: '科研工具',
    directory: 'research-tools',
    indexTitle: '科研工具',
    indexDescription: '这里会自动列出科研工具教程与下载资料。'
  },
  {
    label: '贡献指南',
    directory: 'contribution',
    indexTitle: '贡献指南',
    indexDescription: '这里说明如何提交资料、整理 Markdown 和发起 Pull Request。'
  }
]

const ignoredNames = new Set(['node_modules', '.vitepress', 'public'])
const generatedMarkdownNames = new Set(['downloads.md'])

export async function pathExists(filePath: string): Promise<boolean> {
  try {
    await stat(filePath)
    return true
  } catch {
    return false
  }
}

export async function readMarkdownTitle(absolutePath: string): Promise<string | undefined> {
  const content = await readFile(absolutePath, 'utf8')
  const frontmatter = content.match(/^---\n([\s\S]*?)\n---/)

  if (frontmatter) {
    const titleLine = frontmatter[1]
      .split('\n')
      .map((line) => line.trim())
      .find((line) => line.startsWith('title:'))

    if (titleLine) {
      return cleanTitle(titleLine.replace(/^title:\s*/, ''))
    }
  }

  const heading = content.match(/^#\s+(.+)$/m)
  return heading ? cleanTitle(heading[1]) : undefined
}

export function cleanTitle(title: string): string {
  return title.replace(/^['"]|['"]$/g, '').trim()
}

export function titleFromFilename(relativePath: string): string {
  const parsed = path.parse(relativePath)
  const name = parsed.name === 'index' ? path.basename(parsed.dir) : parsed.name
  const words = name.split(/[-_]+/).filter(Boolean)
  const translations: Record<string, string> = {
    final: '期末',
    midterm: '期中',
    solution: '答案',
    solutions: '答案',
    answer: '答案',
    answers: '答案',
    reference: '参考资料',
    references: '参考资料',
    exam: '考试',
    note: '笔记',
    notes: '笔记'
  }

  return words
    .map((word) => translations[word.toLowerCase()] ?? word)
    .join(' ')
}

export function routeFromRelativePath(relativePath: string): string {
  const withoutExtension = relativePath.replace(/\.md$/, '').replace(/\\/g, '/')
  if (withoutExtension.endsWith('/index')) {
    return `/${withoutExtension.slice(0, -'/index'.length)}/`
  }
  return `/${withoutExtension}`
}

export function publicHref(relativePath: string): string {
  return `${siteBase}${relativePath.replace(/\\/g, '/')}`
}

export async function scanContentFiles(): Promise<ContentFile[]> {
  const files: ContentFile[] = []

  async function visit(directory: string, section: string) {
    const entries = await readdir(directory, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.name.startsWith('.') || ignoredNames.has(entry.name)) {
        continue
      }

      const absolutePath = path.join(directory, entry.name)

      if (entry.isDirectory()) {
        await visit(absolutePath, section)
        continue
      }

      const extension = path.extname(entry.name).toLowerCase()
      if (extension !== '.md' && extension !== '.pdf') {
        continue
      }

      if (extension === '.md' && generatedMarkdownNames.has(entry.name)) {
        continue
      }

      const relativePath = path.relative(docsDir, absolutePath).replace(/\\/g, '/')
      const fileStats = await stat(absolutePath)
      const title = extension === '.md'
        ? (await readMarkdownTitle(absolutePath)) ?? titleFromFilename(relativePath)
        : titleFromFilename(relativePath)

      files.push({
        absolutePath,
        relativePath,
        route: extension === '.md' ? routeFromRelativePath(relativePath) : publicHref(relativePath),
        title,
        extension,
        section,
        updatedAt: fileStats.mtime
      })
    }
  }

  for (const section of sections) {
    const sectionPath = path.join(docsDir, section.directory)
    if (await pathExists(sectionPath)) {
      await visit(sectionPath, section.directory)
    }
  }

  return files.sort((a, b) => a.relativePath.localeCompare(b.relativePath, 'zh-CN'))
}

export function groupByDirectory(files: ContentFile[]): Map<string, ContentFile[]> {
  const groups = new Map<string, ContentFile[]>()

  for (const file of files) {
    const directory = path.dirname(file.relativePath).replace(/\\/g, '/')
    const list = groups.get(directory) ?? []
    list.push(file)
    groups.set(directory, list)
  }

  return groups
}

export function markdownLink(file: ContentFile): string {
  if (file.extension === '.pdf') {
    return `[下载 ${file.title}](${publicHref(file.relativePath)})`
  }

  return `[${file.title}](${file.route})`
}

export async function writeGeneratedFile(filePath: string, content: string) {
  await writeFile(filePath, content, 'utf8')
}

