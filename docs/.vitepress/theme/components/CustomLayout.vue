<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import AutoDownloads from './AutoDownloads.vue'

const { Layout } = DefaultTheme
const route = useRoute()

const enableImageZoom = async () => {
  await nextTick()

  mediumZoom('.vp-doc :not(a) > img', {
    background: 'var(--vp-c-bg)',
    margin: 24
  })
}

onMounted(enableImageZoom)
watch(() => route.path, enableImageZoom)
</script>

<template>
  <Layout>
    <template #doc-after>
      <AutoDownloads />
    </template>
  </Layout>
</template>
