<template>
  <div class="detection-system">
    <!-- 左侧菜单栏 -->
    <div class="sidebar detection-sidebar">
      <div class="brand-logo">
        <h2>入侵检测与数据分析系统</h2>
      </div>
      
      <div class="menu-item active">
        <i class="icon">...</i>
        <span>快捷导航</span>
      </div>
      
      <div class="menu-item">
        <i class="icon">📊</i>
        <span>数据分析</span>
      </div>
      
      <div class="menu-item">
        <i class="icon">🔍</i>
        <span>系统监控</span>
      </div>
      
      <div class="menu-item">
        <i class="icon">🛡️</i>
        <span>入侵检测</span>
      </div>
      
      <div class="menu-item">
        <i class="icon">👥</i>
        <span>用户管理</span>
      </div>
      
      <div class="menu-item">
        <i class="icon">⚙️</i>
        <span>安全设置</span>
      </div>
      
      <div class="menu-item">
        <i class="icon">📝</i>
        <span>报告生成</span>
      </div>
    </div> 
    
    <!-- 主内容区 -->
    <div class="main-content">
      <header class="header">
        <div class="page-title">
          入侵检测与数据分析系统
        </div>
        <div class="header-actions">
          <button class="btn"><i class="icon">🔔</i></button>
          <button class="btn"><i class="icon">📩</i></button>
          <button class="btn"><i class="icon">⚙️</i></button>
          <button class="btn"><i class="icon">👤</i></button>
        </div>
      </header>
      
      <div class="content-wrapper">
        <div class="breadcrumb">
          <a @click="goToHome" class="home-icon">🏠</a> / 首页
        </div>
        
        <!-- 数据概览卡片区 -->
        <section class="data-overview">
          <h3>数据分析概览</h3>
          
          <div class="metric-cards">
            <div class="metric-card network">
              <div class="metric-value">123</div>
              <div class="metric-title">网络流量</div>
              <div class="metric-change negative">较昨日 -15%</div>
              <div class="chart-sm line-chart"></div>
            </div>
            
            <div class="metric-card events">
              <div class="metric-value">123</div>
              <div class="metric-title">攻击事件</div>
              <div class="metric-change positive">较昨日 +66</div>
              <div class="chart-sm bar-chart"></div>
            </div>
            
            <div class="metric-card threats">
              <div class="metric-value">123</div>
              <div class="metric-title">安全威胁</div>
              <div class="metric-change negative">较昨日 -88</div>
              <div class="chart-sm line-chart"></div>
            </div>
            
            <div class="metric-card trend">
              <div class="metric-value">123</div>
              <div class="metric-title">数据趋势</div>
              <div class="metric-change positive">较昨日 +25%</div>
              <div class="chart-sm donut-chart"></div>
            </div>
          </div>
        </section>
        
        <!-- 用户管理图表 -->
        <section class="user-management">
          <h3>用户管理</h3>
          <div class="chart-container">
            <canvas ref="userChart" class="line-chart-lg"></canvas>
          </div>
        </section>
        
        <!-- 底部模块组 -->
        <div class="bottom-modules">
          <section class="module">
            <h3>入侵检测模块帮助</h3>
            <div class="chart-container">
              <canvas ref="detectionChart" class="line-chart-md"></canvas>
            </div>
          </section>
          
          <section class="module">
            <h3>数据分析使用指南</h3>
            <div class="chart-container">
              <canvas ref="dataGuideChart" class="box-chart-md"></canvas>
            </div>
          </section>
          
          <section class="module">
            <h3>最新消息</h3>
            <div class="notification-list">
              <div class="notification error">
                <span class="tag">错误</span>
                <span class="message">紧急高风险漏洞：系统检测到多个高危安全漏洞</span>
              </div>
              <div class="notification info">
                <span class="tag">信息</span>
                <span class="message">需要更新：入侵检测引擎有新版本可用</span>
              </div>
              <div class="notification success">
                <span class="tag">成功</span>
                <span class="message">系统信息：您的账户已成功注册，现在可以享受完整功能</span>
              </div>
              <div class="notification warning">
                <span class="tag">警告</span>
                <span class="message">活动提醒：检测到入侵尝试</span>
              </div>
              <div class="notification info">
                <span class="tag">信息</span>
                <span class="message">提示：检测到无人入侵警报</span>
              </div>
              <div class="notification warning">
                <span class="tag">警告</span>
                <span class="message">被封禁的活动通知：暂停</span>
              </div>
              <div class="notification info">
                <span class="tag">信息</span>
                <span class="message">活动通知如发布，点击查看详情，参与讨论</span>
              </div>
            </div>
            <div class="view-more">
              <a href="#">查看更多</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: "IntrusionDetectionPage",
  data() {
    return {
      userChart: null,
      detectionChart: null,
      dataGuideChart: null,
      chartData: {
        labels: ['1月', '2月', '3月', '4月', '5月'],
        datasets: [
          {
            label: '注册用户',
            data: [100, 150, 200, 150, 120],
            borderColor: '#4080FF',
            backgroundColor: 'rgba(64, 128, 255, 0.1)',
            fill: true,
            lineTension: 0.4
          },
          {
            label: '活跃用户',
            data: [150, 100, 120, 200, 130],
            borderColor: '#36BA5B',
            backgroundColor: 'transparent',
            lineTension: 0.4
          }
        ]
      },
      detectionData: {
        labels: ['1月', '2月', '3月', '4月', '5月'],
        datasets: [
          {
            label: '检测次数',
            data: [100, 150, 200, 100, 130],
            borderColor: '#4080FF',
            backgroundColor: 'rgba(64, 128, 255, 0.5)',
            fill: true,
            lineTension: 0.4
          },
          {
            label: '警报数',
            data: [150, 100, 220, 120, 110],
            borderColor: '#E64A3C',
            backgroundColor: 'transparent',
            lineTension: 0.4
          }
        ]
      },
      dataGuideData: {
        labels: ['数据1', '数据2'],
        datasets: [
          {
            label: '数据项',
            data: [150, 150],
            backgroundColor: ['rgba(64, 128, 255, 0.7)', 'rgba(54, 186, 91, 0.7)'],
            borderWidth: 0
          }
        ]
      }
    };
  },
  created() {
    // 添加CSS类以隐藏默认侧边栏
    document.body.classList.add('detection-page');
  },
  mounted() {
    this.initCharts();
  },
  beforeDestroy() {
    // 移除CSS类，恢复正常显示
    document.body.classList.remove('detection-page');
    
    // 销毁图表实例以防内存泄漏
    if (this.userChart) this.userChart.destroy();
    if (this.detectionChart) this.detectionChart.destroy();
    if (this.dataGuideChart) this.dataGuideChart.destroy();
  },
  methods: {
    initCharts() {
      // 初始化用户管理图表 - Chart.js 2.9.4 语法
      this.userChart = new Chart(this.$refs.userChart.getContext('2d'), {
        type: 'line',
        data: this.chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            // 2.9.4 使用 yAxes 和 xAxes 数组而不是 y 和 x
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontColor: 'rgba(255, 255, 255, 0.7)'
              },
              gridLines: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            }],
            xAxes: [{
              gridLines: {
                color: 'rgba(255, 255, 255, 0.1)'
              },
              ticks: {
                fontColor: 'rgba(255, 255, 255, 0.7)'
              }
            }]
          },
          legend: {
            labels: {
              fontColor: 'rgba(255, 255, 255, 0.7)'
            }
          }
        }
      });
      
      // 初始化入侵检测帮助图表 - Chart.js 2.9.4 语法
      this.detectionChart = new Chart(this.$refs.detectionChart.getContext('2d'), {
        type: 'line',
        data: this.detectionData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontColor: 'rgba(255, 255, 255, 0.7)'
              },
              gridLines: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            }],
            xAxes: [{
              gridLines: {
                color: 'rgba(255, 255, 255, 0.1)'
              },
              ticks: {
                fontColor: 'rgba(255, 255, 255, 0.7)'
              }
            }]
          },
          legend: {
            labels: {
              fontColor: 'rgba(255, 255, 255, 0.7)'
            }
          }
        }
      });
      
      // 初始化数据分析指南图表 - Chart.js 2.9.4 语法
      this.dataGuideChart = new Chart(this.$refs.dataGuideChart.getContext('2d'), {
        type: 'bar',
        data: this.dataGuideData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontColor: 'rgba(255, 255, 255, 0.7)'
              },
              gridLines: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: 'rgba(255, 255, 255, 0.7)'
              }
            }]
          },
          legend: {
            display: false
          }
        }
      });
    },
    goToHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.detection-system {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #0a1a35;
  color: #a7c4e2;
  font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999; /* 使用高 z-index 覆盖其他元素 */
}

/* 侧边栏样式 */
.sidebar {
  width: 220px;
  background-color: #0c1f3e;
  border-right: 1px solid #1e3c6e;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
}

.brand-logo {
  padding: 0 15px 20px;
  border-bottom: 1px solid #1e3c6e;
  margin-bottom: 15px;
}

.brand-logo h2 {
  color: #fff;
  font-size: 16px;
  margin: 0;
  text-align: center;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  color: #a7c4e2;
  cursor: pointer;
  transition: background-color 0.3s;
}

.menu-item:hover {
  background-color: #1e3c6e;
  color: #fff;
}

.menu-item.active {
  background-color: #1e3c6e;
  color: #4db1ff;
  border-left: 3px solid #4db1ff;
  padding-left: 12px;
}

.menu-item .icon {
  margin-right: 10px;
  font-size: 16px;
}

/* 主内容区域样式 */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header {
  height: 60px;
  background-color: #0c1f3e;
  border-bottom: 1px solid #1e3c6e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.page-title {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.btn {
  background: none;
  border: none;
  color: #a7c4e2;
  font-size: 18px;
  cursor: pointer;
  padding: 5px;
}

.btn:hover {
  color: #fff;
}

.content-wrapper {
  flex: 1;
  padding: 20px;
  overflow: auto;
}

.breadcrumb {
  margin-bottom: 20px;
  color: #a7c4e2;
  display: flex;
  align-items: center;
}

.home-icon {
  color: #4db1ff;
  text-decoration: none;
  margin-right: 5px;
}

/* 数据概览卡片样式 */
.data-overview {
  margin-bottom: 20px;
}

.data-overview h3 {
  color: #4db1ff;
  font-size: 16px;
  margin-bottom: 15px;
}

.metric-cards {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.metric-card {
  flex: 1;
  background-color: #0c1f3e;
  border: 1px solid #1e3c6e;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.metric-value {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
}

.metric-title {
  color: #a7c4e2;
  margin-bottom: 5px;
}

.metric-change {
  font-size: 12px;
  margin-bottom: 10px;
}

.metric-change.positive {
  color: #36BA5B;
}

.metric-change.negative {
  color: #E64A3C;
}

.chart-sm {
  height: 50px;
  width: 100%;
  position: relative;
}

/* 网络流量卡片背景 */
.network {
  background-color: rgba(64, 128, 255, 0.1);
}

/* 攻击事件卡片背景 */
.events {
  background-color: rgba(54, 186, 91, 0.1);
}

/* 安全威胁卡片背景 */
.threats {
  background-color: rgba(230, 74, 60, 0.1);
}

/* 数据趋势卡片背景 */
.trend {
  background-color: rgba(250, 173, 20, 0.1);
}

/* 用户管理图表样式 */
.user-management {
  background-color: #0c1f3e;
  border: 1px solid #1e3c6e;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
}

.user-management h3 {
  color: #4db1ff;
  font-size: 16px;
  margin-bottom: 15px;
}

.chart-container {
  position: relative;
  height: 300px;
  width: 100%;
}

/* 底部模块样式 */
.bottom-modules {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.module {
  flex: 1;
  background-color: #0c1f3e;
  border: 1px solid #1e3c6e;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.module h3 {
  color: #4db1ff;
  font-size: 16px;
  margin-bottom: 15px;
  text-align: center;
}

.chart-container.line-chart-md,
.chart-container.box-chart-md {
  height: 200px;
}

/* 通知列表样式 */
.notification-list {
  flex: 1;
  overflow-y: auto;
}

.notification {
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 3px;
  display: flex;
  align-items: center;
}

.notification .tag {
  padding: 2px 6px;
  border-radius: 3px;
  margin-right: 8px;
  font-size: 12px;
  min-width: 40px;
  text-align: center;
}

.notification .message {
  flex: 1;
  font-size: 14px;
}

.notification.error {
  background-color: rgba(230, 74, 60, 0.1);
}

.notification.error .tag {
  background-color: #E64A3C;
  color: white;
}

.notification.success {
  background-color: rgba(54, 186, 91, 0.1);
}

.notification.success .tag {
  background-color: #36BA5B;
  color: white;
}

.notification.warning {
  background-color: rgba(250, 173, 20, 0.1);
}

.notification.warning .tag {
  background-color: #FAAD14;
  color: white;
}

.notification.info {
  background-color: rgba(64, 128, 255, 0.1);
}

.notification.info .tag {
  background-color: #4080FF;
  color: white;
}

.view-more {
  text-align: right;
  margin-top: 10px;
}

.view-more a {
  color: #4db1ff;
  text-decoration: none;
}

.view-more a:hover {
  text-decoration: underline;
}

/* 图表基本样式 */
.line-chart-lg {
  width: 100%;
  height: 100%;
}

@media (max-width: 1200px) {
  .bottom-modules {
    flex-direction: column;
  }
  
  .metric-cards {
    flex-wrap: wrap;
  }
  
  .metric-card {
    min-width: calc(50% - 20px);
  }
}
</style>

<style>
/* 全局样式 */
/* 通过复杂选择器确保只隐藏W5SOAR侧边栏 */
body.detection-page .w5-sidebar,
body.detection-page .el-aside,
body.detection-page .app-aside,
body.detection-page > div > div > .sidebar:not(.detection-sidebar),
body.detection-page #app > div > aside {
  display: none !important;
}

/* 确保入侵检测页面自己的侧边栏可见 */
body.detection-page .detection-system .detection-sidebar {
  display: flex !important;
}

/* 调整主内容区域布局 */
body.detection-page .app-main,
body.detection-page .el-main,
body.detection-page .main-container {
  margin-left: 0 !important;
  width: 100% !important;
  padding-left: 0 !important;
}
</style> 