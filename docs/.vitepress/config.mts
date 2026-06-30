import { defineConfig } from 'vitepress'
import markdownItKatex from 'markdown-it-katex'

export default defineConfig({
  lang: 'zh-CN',
  title: '物理学习指南',
  description: '开放、共享、协作的大学物理知识库',
  base: '/betterFuPh/',
  cleanUrls: true,
  markdown: {
    config(md) {
      md.use(markdownItKatex, { throwOnError: false })
    },
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
      { text: '欢迎 PR', link: '/contribution/' },
    ],
    sidebar: {
      '/courses/': [
        {
          text: '课程',
          items: [
            { text: '原子物理', link: '/courses/atomic/' },
            { text: '计算物理', link: '/courses/computational/' },
            { text: '静电场', link: '/courses/electrodynamics/electrostatics' },
            { text: '电动力学', link: '/courses/electrodynamics/' },
            { text: '静磁场', link: '/courses/electrodynamics/magnetostatics' },
            { text: '麦克斯韦方程', link: '/courses/electrodynamics/maxwell-equations' },
            { text: '研究生课程', link: '/courses/graduate/' },
            { text: '课程总览', link: '/courses/' },
            { text: '实验课程', link: '/courses/labs/' },
            { text: '数学物理方法', link: '/courses/mathphys/' },
            { text: '哈密顿力学', link: '/courses/mechanics/hamiltonian' },
            { text: '经典力学', link: '/courses/mechanics/' },
            { text: '拉格朗日力学', link: '/courses/mechanics/lagrangian' },
            { text: '牛顿力学', link: '/courses/mechanics/newtonian' },
            { text: '量子力学', link: '/courses/quantum/' },
            { text: '算符', link: '/courses/quantum/operators' },
            { text: '微扰论', link: '/courses/quantum/perturbation' },
            { text: '态空间', link: '/courses/quantum/state-space' },
            { text: '固体物理', link: '/courses/solid/' },
            { text: '热力学与统计物理', link: '/courses/thermo/' },
          ],
        },
      ],
    },
    outline: { level: [2, 3], label: '本页目录' },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    editLink: {
      pattern: 'https://github.com/aoitoribu/betterFuPh/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    footer: {
      message: '内容遵循开放协作精神维护，欢迎提交 Pull Request。',
      copyright: 'Copyright © 2026 物理学习指南贡献者',
    },
  },
})
