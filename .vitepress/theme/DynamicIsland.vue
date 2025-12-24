<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { page, frontmatter } = useData()

// 强制判断：只有当 layout 不是 'home' 且不是 404 页面时才显示
const show = computed(() => {
  return frontmatter.value.layout !== 'home' && page.value.isNotFound !== true
})
</script>

<template>
  <Transition name="island-fade">
    <div v-if="show" class="island-wrapper">
      <div class="island-pill">
        <span class="iso-badge">KSVG</span>
        <span class="doc-title">{{ page.title }}</span>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.island-wrapper {
  position: fixed; bottom: 30px; left: 0; right: 0;
  display: flex; justify-content: center;
  z-index: 100; pointer-events: none;
}

.island-pill {
  pointer-events: auto;
  background: rgba(20, 20, 22, 0.8); /* 更深邃的黑色背景 */
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  padding: 8px 18px; 
  border-radius: 50px; /* 完美的胶囊圆角 */
  display: flex; align-items: center; gap: 12px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.25);
  border: 1px solid rgba(255,255,255,0.08); 
  color: white;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform: translateY(0);
}

.island-pill:hover {
  transform: translateY(-2px) scale(1.02);
  background: rgba(20, 20, 22, 0.95);
  box-shadow: 0 15px 50px rgba(146, 7, 131, 0.3); /* 悬停时发出 KSVG 紫光 */
}

.iso-badge { 
  font-size: 11px; font-weight: 800; letter-spacing: 0.5px;
  background: #920783; color: white;
  padding: 3px 8px; border-radius: 12px; 
}

.doc-title { 
  font-size: 13px; font-weight: 500; opacity: 0.9;
  max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* 进出场动画 */
.island-fade-enter-active,
.island-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.island-fade-enter-from,
.island-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>