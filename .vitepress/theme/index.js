import DefaultTheme from 'vitepress/theme'
import './style.css'
import { h, onMounted } from 'vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 在正文前注入按钮
      'doc-before': () => h('button', {
        class: 'print-button',
        onClick: () => window.print()
      }, '输出预览PDF')
    })
  },
  setup() {
    onMounted(async () => {
      // 1. 获取时间
      const now = new Date();
      const timeStr = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

      // 2. 获取 IP (使用公共 API)
      let ipAddr = 'Unknown IP';
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        ipAddr = data.ip;
      } catch (e) {
        console.error("无法获取IP地址");
      }

      // 3. 组合信息并存入 CSS 变量
      const watermarkText = `KSVG DOCS, Accessed ${timeStr} by ${ipAddr}`;
      document.documentElement.style.setProperty('--wm-text', `"${watermarkText}"`);
    })
  }
}