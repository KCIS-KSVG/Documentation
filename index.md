---
layout: home

hero:
  name: "KSVG Documentation"
  text: "Setting the Standard."
  tagline: 制定校园摄影团队行政与技术标准
  image:
    src: https://raw.githubusercontent.com/KCIS-KSVG/Data/main/embed/ksvg-logo.png
    alt: KSVG Logo
  actions:
    - theme: brand
      text: 标准化文件库
      link: /standards/ks-1001
    - theme: alt
      text: 组织首页
      link: https://ksvg.com.cn/
---

<script setup>
import { onMounted, onUnmounted } from 'vue'

// Logo 滚动渐隐逻辑
const handleScroll = () => {
  // 获取 Hero 区域的图片元素
  const heroImage = document.querySelector('.VPHero .image')
  if (heroImage) {
    const scrollY = window.scrollY
    // 计算透明度：滚动 0 到 400 像素，透明度 1 -> 0
    const opacity = Math.max(0, 1 - scrollY / 400)
    heroImage.style.opacity = opacity
    // 同时也让它稍微变小一点，增加动感
    heroImage.style.transform = `scale(${1 - scrollY / 1000})`
  }
}

// 组件挂载时监听滚动
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// 组件卸载时移除监听
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<!-- 
首页主要内容区域 
风格：行政风、极简、无图
-->

<div class="home-container">
  
  <!-- 卡片 1 -->
  <div class="text-card">
    <span class="card-icon">01</span>
    <h2>行政标准化<br>Administrative.</h2>
    <p>KSVG 致力于构建可持续运行的校园影像组织架构。我们制定人员招募、器材管理、资产归档以及数据安全的行政SOP，确保组织在人员更迭中保持高效运行。</p>
  </div>

  <!-- 卡片 2 -->
  <div class="text-card">
    <span class="card-icon">02</span>
    <h2>技术性规范<br>Industrial.</h2>
    <p>从色彩空间的统一，到文件命名的标准化。我们将影像生产过程量化为可执行的技术标准，为校园社群提供高质量、一致性的视觉输出。</p>
  </div>

  <!-- 卡片 3 -->
  <div class="text-card">
    <span class="card-icon">03</span>
    <h2>开放与开源<br>Open Standard.</h2>
    <p>我们的标准文档完全开源。无论是校内独立创作者还是其他学生组织，均可参考 KSVG 标准化体系，共同推动校园影像技术的专业化进程。</p>
  </div>

</div>

<!-- 底部呼吁行动区域 -->
<div class="cta-section">
  <div class="cta-content">
    <h2>准备好开始了吗？</h2>
    <p>查阅 KSVG 标准化文档，开启专业化流程。</p>
    <div class="cta-actions">
      <a class="VPButton brand medium cta-button" href="standards/KSVG-10-01">浏览文档库</a>
    </div>
  </div>
</div>