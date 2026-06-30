import { defineConfig } from 'vitepress'
import katex from 'katex'
import { generatedSidebar } from './generated/sidebar'

const repositoryName = 'betterFuPh'
const siteUrl = `https://aoitoribu.github.io/${repositoryName}/`
const siteBase = `/${repositoryName}/`

function renderKatex(source: string, displayMode: boolean) {
  return katex.renderToString(source, {
    displayMode,
    throwOnError: false,
    output: 'htmlAndMathml',
    strict: 'warn'
  })
}

function installKatexMarkdown(md: any) {
  md.inline.ruler.after('escape', 'math_inline', (state: any, silent: boolean) => {
    if (state.src[state.pos] !== '$' || state.src[state.pos + 1] === '$') {
      return false
    }

    if (state.pos > 0 && state.src[state.pos - 1] === '\\') {
      return false
    }

    let close = state.pos + 1
    while ((close = state.src.indexOf('$', close)) !== -1) {
      if (state.src[close - 1] !== '\\') {
        break
      }
      close += 1
    }

    if (close === -1 || close === state.pos + 1) {
      return false
    }

    if (!silent) {
      const token = state.push('math_inline', 'math', 0)
      token.content = state.src.slice(state.pos + 1, close)
    }

    state.pos = close + 1
    return true
  })

  md.block.ruler.after(
    'blockquote',
    'math_block',
    (state: any, startLine: number, endLine: number, silent: boolean) => {
      const start = state.bMarks[startLine] + state.tShift[startLine]
      const max = state.eMarks[startLine]

      if (state.src.slice(start, start + 2) !== '$$') {
        return false
      }

      const firstLine = state.src.slice(start + 2, max)
      let content = ''
      let nextLine = startLine
      let found = false

      if (firstLine.trim().endsWith('$$') && firstLine.trim().length > 2) {
        content = firstLine.trim().slice(0, -2)
        found = true
      } else {
        content = firstLine

        for (nextLine = startLine + 1; nextLine < endLine; nextLine += 1) {
          const lineStart = state.bMarks[nextLine] + state.tShift[nextLine]
          const lineEnd = state.eMarks[nextLine]
          const line = state.src.slice(lineStart, lineEnd)
          const close = line.indexOf('$$')

          if (close >= 0) {
            content += `\n${line.slice(0, close)}`
            found = true
            break
          }

          content += `\n${line}`
        }
      }

      if (!found) {
        return false
      }

      if (!silent) {
        const token = state.push('math_block', 'math', 0)
        token.block = true
        token.content = content.trim()
        token.map = [startLine, nextLine + 1]
      }

      state.line = nextLine + 1
      return true
    },
    { alt: ['paragraph', 'reference', 'blockquote', 'list'] }
  )

  md.renderer.rules.math_inline = (tokens: any[], index: number) =>
    renderKatex(tokens[index].content, false)

  md.renderer.rules.math_block = (tokens: any[], index: number) =>
    `${renderKatex(tokens[index].content, true)}\n`
}
export default defineConfig({
  lang: 'zh-CN',
  title: '物理学习指南',
  description: '开放、共享、协作的大学物理知识库',
  base: siteBase,
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: siteUrl
  },
  head: [
    ['link', { rel: 'icon', href: `${siteBase}assets/favicon.svg`, type: 'image/svg+xml' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: '物理学习指南 RSS', href: `${siteBase}feed.xml` }],
    ['meta', { name: 'theme-color', content: '#2f5d62' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '物理学习指南' }],
    ['meta', { property: 'og:description', content: '开放、共享、协作的大学物理知识库' }],
    ['meta', { property: 'og:url', content: siteUrl }]
  ],
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    },
    toc: {
      level: [2, 3]
    },
    config(md) {
      installKatexMarkdown(md)

      const defaultFence = md.renderer.rules.fence
      md.renderer.rules.fence = (tokens, index, options, env, self) => {
        const token = tokens[index]
        const language = token.info.trim().split(/\s+/)[0]

        if (language === 'mermaid') {
          const encodedCode = encodeURIComponent(token.content)
          return `<MermaidDiagram code="${encodedCode}" />`
        }

        if (defaultFence) {
          return defaultFence(tokens, index, options, env, self)
        }

        return self.renderToken(tokens, index, options)
      }
    }
  },
  themeConfig: {
    logo: '/assets/mark.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '课程', link: '/courses/' },
      { text: '真题', link: '/past-exams/' },
      { text: '讲义', link: '/lecture-notes/' },
      { text: '科研工具', link: '/research-tools/' },
      { text: '贡献指南', link: '/contribution/' },
      { text: 'GitHub', link: 'https://github.com/aoitoribu/betterFuPh' },
      { text: '联系', link: 'mailto:betterfudan@outlook.com' },
      { text: '欢迎 PR', link: '/contribution/' }
    ],
    sidebar: generatedSidebar,
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '语言',
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    editLink: {
      pattern: 'https://github.com/aoitoribu/betterFuPh/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    footer: {
      message: '内容遵循开放协作精神维护，欢迎提交 Pull Request。',
      copyright: 'Copyright © 2026 物理学习指南贡献者'
    }
  }
})
