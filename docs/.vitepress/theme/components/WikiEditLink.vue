<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'

const siteBase = '/betterFuPh'
const route = useRoute()
const { frontmatter } = useData()

function sourcePathFromRoute(pathname: string): string {
  let cleanPath = pathname.split('#')[0].split('?')[0]

  if (cleanPath.startsWith(siteBase)) {
    cleanPath = cleanPath.slice(siteBase.length) || '/'
  }

  cleanPath = cleanPath.replace(/\.html$/, '')

  if (cleanPath === '/') {
    return 'docs/index.md'
  }

  if (cleanPath.endsWith('/')) {
    return `docs${cleanPath}index.md`
  }

  return `docs${cleanPath}.md`
}

const shouldShow = computed(() => frontmatter.value.editLink !== false && frontmatter.value.layout !== 'home')
const editorHref = computed(() => withBase(`/contribution/editor?path=${encodeURIComponent(sourcePathFromRoute(route.path))}`))
</script>

<template>
  <div v-if="shouldShow" class="wiki-edit-link">
    <a :href="editorHref" aria-label="编辑本页 Markdown">编辑本页</a>
  </div>
</template>
