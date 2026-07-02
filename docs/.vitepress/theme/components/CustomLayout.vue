<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import AutoDownloads from './AutoDownloads.vue'
import UtterancesComments from './UtterancesComments.vue'
import WikiEditLink from './WikiEditLink.vue'

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
    <template #doc-before>
      <WikiEditLink />
    </template>
    <template #doc-after>
      <AutoDownloads />
      <UtterancesComments />
    </template>
  </Layout>
</template>
