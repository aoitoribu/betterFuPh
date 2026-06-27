<script setup lang="ts">
import mermaid from 'mermaid'
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'

const props = defineProps<{
  code: string
}>()

const { isDark } = useData()
const svg = ref('')
const id = `mermaid-${Math.random().toString(36).slice(2)}`

const decodedCode = computed(() => decodeURIComponent(props.code))

const renderDiagram = async () => {
  await nextTick()

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: isDark.value ? 'dark' : 'neutral'
  })

  const result = await mermaid.render(id, decodedCode.value)
  svg.value = result.svg
}

onMounted(renderDiagram)
watch([decodedCode, isDark], renderDiagram)
</script>

<template>
  <div class="mermaid-diagram" v-html="svg"></div>
</template>
