<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const repository = 'aoitoribu/betterFuPh'
const route = useRoute()
const { frontmatter, isDark } = useData()
const container = ref<HTMLElement | null>(null)

function shouldShowComments() {
  return frontmatter.value.comments !== false
}

async function loadUtterances() {
  await nextTick()

  if (!container.value || !shouldShowComments()) {
    return
  }

  container.value.innerHTML = ''

  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.setAttribute('repo', repository)
  script.setAttribute('issue-term', 'pathname')
  script.setAttribute('label', 'utterance')
  script.setAttribute('theme', isDark.value ? 'github-dark' : 'github-light')

  container.value.appendChild(script)
}

onMounted(loadUtterances)
watch(() => route.path, loadUtterances)
watch(isDark, loadUtterances)
</script>

<template>
  <section v-if="frontmatter.comments !== false" class="utterances-panel" aria-labelledby="utterances-title">
    <div class="utterances-panel__header">
      <p>页面讨论</p>
      <h2 id="utterances-title">补充、纠错和提问</h2>
    </div>
    <div ref="container"></div>
  </section>
</template>
