import DefaultTheme from 'vitepress/theme'
import './style.css'
import { h } from 'vue'
import DynamicIsland from './DynamicIsland.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(DynamicIsland)
    })
  }
}