<script setup lang="ts">
const features = [
  { title: '经典力学', href: '/betterFuPh/courses/mechanics/', note: '从牛顿方程到哈密顿形式' },
  { title: '电动力学', href: '/betterFuPh/courses/electrodynamics/', note: '场论语言与麦克斯韦方程' },
  { title: '热力学与统计物理', href: '/betterFuPh/courses/thermo/', note: '宏观规律与微观图像' },
  { title: '量子力学', href: '/betterFuPh/courses/quantum/', note: '态空间、算符与近似方法' },
  { title: '原子物理', href: '/betterFuPh/courses/atomic/', note: '光谱、结构与跃迁' },
  { title: '固体物理', href: '/betterFuPh/courses/solid/', note: '晶格、能带与准粒子' },
  { title: '数学物理方法', href: '/betterFuPh/courses/mathphys/', note: '特殊函数、复变与方程' },
  { title: '计算物理', href: '/betterFuPh/courses/computational/', note: '数值方法与可复现实验' },
  { title: '实验课程', href: '/betterFuPh/courses/labs/', note: '实验报告、误差与仪器' },
  { title: '科研工具', href: '/betterFuPh/research-tools/', note: 'LaTeX、Python 与文献管理' },
  { title: '研究生课程', href: '/betterFuPh/courses/graduate/', note: '更深入的专题学习路线' },
  { title: '历年真题', href: '/betterFuPh/past-exams/', note: '试题、答案与参考资料' },
  { title: '最新更新', href: '/betterFuPh/feed.xml', note: '跟踪新增内容与修订' }
]
</script>

<template>
  <section class="home-section" aria-labelledby="feature-title">
    <div class="home-section__header">
      <p>知识地图</p>
      <h2 id="feature-title">按课程和资源类型浏览</h2>
    </div>
    <div class="feature-grid">
      <a v-for="feature in features" :key="feature.title" class="feature-card" :href="feature.href">
        <span>{{ feature.title }}</span>
        <small>{{ feature.note }}</small>
      </a>
    </div>
  </section>
</template>
