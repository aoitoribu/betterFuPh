import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CustomLayout from './components/CustomLayout.vue'
import ContributionPanel from './components/ContributionPanel.vue'
import DownloadList from './components/DownloadList.vue'
import FeatureGrid from './components/FeatureGrid.vue'
import HomeHero from './components/HomeHero.vue'
import MermaidDiagram from './components/MermaidDiagram.vue'
import 'katex/dist/katex.min.css'
import './styles.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    app.component('ContributionPanel', ContributionPanel)
    app.component('DownloadList', DownloadList)
    app.component('FeatureGrid', FeatureGrid)
    app.component('HomeHero', HomeHero)
    app.component('MermaidDiagram', MermaidDiagram)
  }
}

export default theme
