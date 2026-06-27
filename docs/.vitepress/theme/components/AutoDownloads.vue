<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vitepress'
import { downloadsByPage } from '../../generated/downloads'

const route = useRoute()
const isMounted = ref(false)
const siteBase = '/betterFuPh'

function normalizePath(pathname: string): string {
  let normalized = pathname.startsWith(siteBase)
    ? pathname.slice(siteBase.length) || '/'
    : pathname

  normalized = normalized.replace(/\.html$/, '')

  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1)
  }

  return normalized
}

onMounted(() => {
  isMounted.value = true
})

const downloads = computed(() => {
  const candidates = [route.path]

  if (isMounted.value) {
    candidates.push(window.location.pathname)
  }

  for (const candidate of candidates) {
    const downloadsForPath = downloadsByPage[normalizePath(candidate)]

    if (downloadsForPath) {
      return downloadsForPath
    }
  }

  return []
})
</script>

<template>
  <section v-if="downloads.length > 0" class="auto-downloads" aria-labelledby="auto-downloads-title">
    <h2 id="auto-downloads-title">相关下载</h2>
    <div class="download-list">
      <a v-for="item in downloads" :key="item.href" class="download-item" :href="item.href" download>
        <span>{{ item.title }}</span>
        <small>{{ item.type }}</small>
      </a>
    </div>
  </section>
</template>
