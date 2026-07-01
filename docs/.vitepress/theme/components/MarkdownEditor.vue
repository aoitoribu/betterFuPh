<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Marked, Renderer } from 'marked'
import katex from 'katex'
import mermaid from 'mermaid'
import { useData } from 'vitepress'

const repositoryUrl = 'https://github.com/aoitoribu/betterFuPh'

const starterMarkdown = `---
title: 页面标题
---

# 页面标题

用一两句话说明这份资料适合谁阅读，以及它补充了哪个课程主题。

## 核心概念

- 第一条要点
- 第二条要点
- 可以写行内公式 $E = mc^2$

## 推导或例题

块级公式会按网站样式显示：

$$
\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}
$$

## 参考资料

- 课程讲义或教材页码
- 如果内容来自他人资料，请说明来源和授权情况
`

const { isDark } = useData()
const markdown = ref(starterMarkdown)
const copied = ref('')
const targetPath = ref('docs/courses/example/new-page.md')
const previewRef = ref<HTMLElement | null>(null)
const editorGridRef = ref<HTMLElement | null>(null)
const splitPercent = ref(40)
const isDragging = ref(false)

const gridStyle = computed<Record<string, string>>(() => ({
  '--editor-source-width': `${splitPercent.value}%`
}))

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function stripFrontmatter(value: string) {
  return value.replace(/^\uFEFF?---\n[\s\S]*?\n---\n?/, '')
}

function renderMathSegments(value: string) {
  const segments: string[] = []
  let cursor = 0
  const pattern = /(\$\$[\s\S]+?\$\$|\$(?!\$)(?:\\.|[^$\\])+\$)/g
  let match: RegExpExecArray | null

  while ((match = pattern.exec(value)) !== null) {
    segments.push(escapeHtml(value.slice(cursor, match.index)))
    const raw = match[0]
    const displayMode = raw.startsWith('$$')
    const content = displayMode ? raw.slice(2, -2) : raw.slice(1, -1)

    try {
      segments.push(katex.renderToString(content.trim(), {
        displayMode,
        throwOnError: false,
        output: 'htmlAndMathml',
        strict: 'warn'
      }))
    } catch {
      segments.push(escapeHtml(raw))
    }

    cursor = match.index + raw.length
  }

  segments.push(escapeHtml(value.slice(cursor)))
  return segments.join('')
}

function updateSplit(clientX: number) {
  if (!editorGridRef.value) return

  const rect = editorGridRef.value.getBoundingClientRect()
  const next = ((clientX - rect.left) / rect.width) * 100
  splitPercent.value = Math.min(70, Math.max(25, Math.round(next)))
}

function stopDrag() {
  isDragging.value = false
  window.removeEventListener('pointermove', onPointerMove)
}

function onPointerMove(event: PointerEvent) {
  updateSplit(event.clientX)
}

function onSplitterPointerDown(event: PointerEvent) {
  updateSplit(event.clientX)
  isDragging.value = true
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', stopDrag, { once: true })
  event.preventDefault()
}

const renderer = new Renderer()

renderer.text = ({ text }) => renderMathSegments(text)
renderer.code = ({ text, lang }) => {
  const language = (lang || '').trim().split(/\s+/)[0]

  if (language === 'mermaid') {
    const encoded = encodeURIComponent(text)
    return `<div class="mermaid-diagram editor-mermaid" data-code="${encoded}"><pre>${escapeHtml(text)}</pre></div>`
  }

  const languageClass = language ? ` class="language-${escapeHtml(language)}"` : ''
  return `<div class="language-${escapeHtml(language || 'text')}"><button title="Copy Code" class="copy"></button><span class="lang">${escapeHtml(language)}</span><pre><code${languageClass}>${escapeHtml(text)}</code></pre></div>`
}

renderer.html = ({ text }) => text

const marked = new Marked({
  async: false,
  breaks: false,
  gfm: true,
  renderer
})

const previewHtml = computed(() => marked.parse(stripFrontmatter(markdown.value)) as string)
const downloadUrl = computed(() => {
  const blob = new Blob([markdown.value], { type: 'text/markdown;charset=utf-8' })
  return URL.createObjectURL(blob)
})

const normalizedTargetPath = computed(() => {
  const value = targetPath.value.trim().replace(/\\/g, '/').replace(/^\/+/, '')
  return value.endsWith('.md') ? value : `${value}.md`
})

const githubNewFileUrl = computed(() => {
  const path = normalizedTargetPath.value.replace(/^docs\//, '')
  return `${repositoryUrl}/new/main/docs?filename=${encodeURIComponent(path)}&value=${encodeURIComponent(markdown.value)}`
})

async function copyText(value: string, label: string) {
  await navigator.clipboard.writeText(value)
  copied.value = label
  window.setTimeout(() => {
    if (copied.value === label) copied.value = ''
  }, 1600)
}

async function renderMermaidBlocks() {
  await nextTick()

  if (!previewRef.value) return

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: isDark.value ? 'dark' : 'neutral'
  })

  const blocks = [...previewRef.value.querySelectorAll<HTMLElement>('.editor-mermaid')]

  await Promise.all(blocks.map(async (block, index) => {
    const code = decodeURIComponent(block.dataset.code || '')
    const id = `editor-mermaid-${index}-${Math.random().toString(36).slice(2)}`

    try {
      const result = await mermaid.render(id, code)
      block.innerHTML = result.svg
    } catch {
      block.classList.add('editor-mermaid--error')
    }
  }))
}

onMounted(renderMermaidBlocks)
onBeforeUnmount(stopDrag)
watch([previewHtml, isDark], renderMermaidBlocks)
</script>

<template>
  <section class="markdown-editor-shell">
    <header class="markdown-editor-toolbar">
      <div>
        <p>编辑助手</p>
        <h1>Markdown 实时预览</h1>
      </div>
      <div class="markdown-editor-actions" aria-label="提交工具">
        <button type="button" class="home-button" @click="copyText(markdown, '内容已复制')">
          {{ copied === '内容已复制' ? '已复制' : '复制内容' }}
        </button>
        <a class="home-button" :href="downloadUrl" download="contribution.md">下载 Markdown</a>
        <a class="home-button home-button--primary" :href="githubNewFileUrl" target="_blank" rel="noreferrer">在 GitHub 新建文件</a>
      </div>
    </header>

    <div class="markdown-editor-path">
      <label for="target-path">建议保存路径</label>
      <input id="target-path" v-model="targetPath" type="text" spellcheck="false">
      <button type="button" class="home-button" @click="copyText(normalizedTargetPath, '路径已复制')">
        {{ copied === '路径已复制' ? '已复制' : '复制路径' }}
      </button>
    </div>

    <div
      ref="editorGridRef"
      class="markdown-editor-grid"
      :class="{ 'is-dragging': isDragging }"
      :style="gridStyle"
    >
      <label class="markdown-editor-pane markdown-editor-pane--source">
        <span>Markdown</span>
        <textarea v-model="markdown" spellcheck="false" />
      </label>

      <button
        type="button"
        class="markdown-editor-splitter"
        role="separator"
        aria-label="拖动调整编辑区和预览区宽度"
        aria-valuemin="25"
        aria-valuemax="70"
        :aria-valuenow="splitPercent"
        @pointerdown="onSplitterPointerDown"
      >
        <span>{{ splitPercent }} / {{ 100 - splitPercent }}</span>
      </button>

      <section class="markdown-editor-pane markdown-editor-pane--preview" aria-label="网页预览">
        <span>网页预览</span>
        <article ref="previewRef" class="vp-doc markdown-editor-preview" v-html="previewHtml"></article>
      </section>
    </div>
  </section>
</template>
