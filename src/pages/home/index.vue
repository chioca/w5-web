<template>
  <div class="dashboard full-page">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="nav-left">
        <div class="nav-item">首页</div>
        <div class="nav-item dropdown">
          网络攻击预警 <span class="arrow">▼</span>
          <div class="dropdown-content">
            <div>网络攻击预警</div>
            <div>脆弱性态势</div>
            <div>威胁态势</div>
            <div>安全运营态势</div>
          </div>
        </div>
      </div>
      
      <div class="platform-title">
        <div class="title-graphic">
          <div class="trapezoid"></div>
          <div class="title-text">智能安全运营平台</div>
          <div class="trapezoid right"></div>
        </div>
        <div class="title-underline"></div>
      </div>
      
      <div class="nav-right">
        <div class="nav-item" @click="goToSoar">安全编排</div>
        <div class="nav-item">入侵检测</div>
        <div class="nav-item">智能运营</div>
        <div class="nav-item">系统管理</div>
        <div class="user-icon">👤</div>
      </div>
    </header>

    <!-- 主体内容 -->
    <main class="content">
      <!-- 左侧面板 -->
      <div class="left-panel">
        <div class="data-box threat-box">
          <h3>威胁数据</h3>
          <div class="data-content"></div>
        </div>
        <div class="data-box asset-box">
          <h3>资产数据</h3>
          <div class="data-content"></div>
        </div>
        <div class="data-box operation-box">
          <h3>安全运营数据</h3>
          <div class="data-content">
            <div class="metric-grid">
              <div class="metric">告警量</div>
              <div class="metric">事件量</div>
              <div class="metric">自动处量</div>
              <div class="metric">手动处量</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 中间地图区域 -->
      <div class="center-panel">
        <div class="time-bar">
          <span>时间</span>
          <div class="time-selector"></div>
        </div>
        <div class="map-area">
          <h3 class="section-label">攻击态势</h3>
          <div class="china-map">
            <china-map></china-map>
          </div>
        </div>
        <div class="risk-bar">
          <h3 class="section-label">高危风险</h3>
        </div>
        <div class="attack-alerts">
          <h3 class="section-label">网络攻击预警</h3>
        </div>
      </div>

      <!-- 右侧面板 -->
      <div class="right-panel">
        <div class="data-box vulnerability-box">
          <h3>漏洞数据</h3>
          <div class="data-content"></div>
        </div>
        <div class="data-box device-box">
          <h3>网络设备状态</h3>
          <div class="data-content"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ChinaMap from '@/components/ChinaMap.vue';

export default {
  name: "HomePage",
  components: {
    ChinaMap
  },
  created() {
    document.body.classList.add('home-page');
  },
  beforeDestroy() {
    document.body.classList.remove('home-page');
  },
  methods: {
    goToSoar() {
      this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>
.dashboard.full-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #0a1a35;
  color: #a7c4e2;
  font-family: Arial, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #0c1f3e;
  border-bottom: 1px solid #1e3c6e;
  position: relative;
}

.nav-left, .nav-right {
  display: flex;
  align-items: center;
}

.platform-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-graphic {
  display: flex;
  align-items: center;
}

.trapezoid {
  width: 80px;
  height: 40px;
  background-color: #0c1f3e;
  border-top: 2px solid #3d68b0;
  border-left: 2px solid #3d68b0;
  border-bottom: 2px solid #3d68b0;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
}

.trapezoid.right {
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
  border-right: 2px solid #3d68b0;
  border-left: none;
}

.title-text {
  padding: 0 20px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #0c1f3e;
  border-top: 2px solid #3d68b0;
  border-bottom: 2px solid #3d68b0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-underline {
  width: 300px;
  height: 3px;
  background: linear-gradient(to right, transparent, #3d68b0, transparent);
  margin-top: -2px;
}

.nav-item {
  margin: 0 15px;
  padding: 6px 10px;
  cursor: pointer;
  position: relative;
  color: #a7c4e2;
  font-size: 14px;
}

.nav-item:hover {
  color: white;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.arrow {
  display: inline-block;
  margin-left: 5px;
  font-size: 10px;
  color: #a7c4e2;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #0c1f3e;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 100;
  top: 100%;
  left: 0;
  margin-top: 5px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content div {
  color: #a7c4e2;
  padding: 10px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  border-bottom: 1px solid #1e3c6e;
}

.dropdown-content div:hover {
  background-color: #1e3c6e;
  color: white;
}

.user-icon {
  font-size: 22px;
  margin-left: 20px;
  cursor: pointer;
}

/* 二级菜单 */
.sub-menu {
  background-color: #0a1a35;
  padding: 0;
  border-bottom: 1px solid #1e3c6e;
  position: relative;
}

.sub-menu-items {
  position: absolute;
  top: 0;
  left: 115px;
  display: flex;
  background-color: #0a1a35;
  z-index: 5;
}

.sub-menu-item {
  padding: 8px 15px;
  color: #a7c4e2;
  cursor: pointer;
}

.sub-menu-item:first-child {
  color: #ffffff;
  background-color: #0c1f3e;
}

/* 内容区域 */
.content {
  display: flex;
  flex: 1;
  padding: 20px;
  gap: 20px;
  overflow: hidden;
}

.left-panel, .right-panel {
  display: flex;
  flex-direction: column;
  width: 22%;
  gap: 20px;
}

.center-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.data-box {
  background-color: #0c1f3e;
  border: 1px solid #1e3c6e;
  border-radius: 5px;
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.data-box h3 {
  color: #4db1ff;
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 18px;
  text-align: center;
}

.data-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.metric-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.metric {
  background-color: #1e3c6e;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
}

.time-bar {
  height: 40px;
  background-color: #0c1f3e;
  border: 1px solid #1e3c6e;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  gap: 20px;
}

.time-selector {
  flex: 1;
  height: 25px;
  background-color: #1e3c6e;
  border-radius: 5px;
}

.map-area {
  flex: 2;
  background-color: #0c1f3e;
  border: 1px solid #1e3c6e;
  border-radius: 5px;
  padding: 15px;
  position: relative;
}

.section-label {
  color: #4db1ff;
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 18px;
}

.china-map {
  height: 100%;
  position: relative;
}

.risk-bar {
  height: 60px;
  background-color: #0c1f3e;
  border: 1px solid #1e3c6e;
  border-radius: 5px;
  padding: 15px;
}

.attack-alerts {
  flex: 1;
  background-color: #0c1f3e;
  border: 1px solid #1e3c6e;
  border-radius: 5px;
  padding: 15px;
}

/* 数据框特定样式 */
.threat-box h3, .asset-box h3, .operation-box h3,
.vulnerability-box h3, .device-box h3 {
  color: #4db1ff;
  align-self: center;
}

.operation-box .data-content {
  justify-content: space-between;
}
</style>

<style>
/* 全局样式，确保在主页面不显示侧边栏 */
body.home-page .sidebar,
body.home-page .app-sidebar,
body.home-page .side-menu {
  display: none !important;
}

body.home-page .main-content,
body.home-page .app-main {
  margin-left: 0 !important;
  width: 100% !important;
}

/* 使用类似于截图的字体 */
body.home-page {
  font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style> 