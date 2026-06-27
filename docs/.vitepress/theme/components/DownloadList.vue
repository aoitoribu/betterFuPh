<script setup lang="ts">
type DownloadItem = {
  title: string
  href: string
  type?: string
}

defineProps<{
  items: DownloadItem[]
}>()
</script>

<template>
  <div class="download-list">
    <a v-for="item in items" :key="item.href" class="download-item" :href="item.href" download>
      <span>{{ item.title }}</span>
      <small>{{ item.type || '下载' }}</small>
    </a>
  </div>
</template>
