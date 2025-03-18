<template>
  <div class="map-wrapper">
    <div class="map-outline">
      <!-- 简化的中国地图 SVG 路径 -->
      <svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M650,200 Q800,250 750,400 Q720,500 600,550 Q450,600 300,450 Q250,350 350,250 Q450,180 650,200 Z" 
          fill="none" 
          stroke="#1e3c6e" 
          stroke-width="2"
        />
      </svg>
      
      <!-- 攻击线条 -->
      <div class="attack-line" v-for="(line, index) in attackLines" :key="index"
           :style="getLineStyle(line)">
        <div class="attack-point" :style="getPointStyle(line.color)"></div>
      </div>
      
      <!-- 城市点 -->
      <div class="city-point" v-for="(city, index) in cities" :key="index"
           :style="getCityStyle(city)">
        <div class="city-label">{{ city.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChinaMap',
  data() {
    return {
      // 模拟攻击线数据
      attackLines: [
        { x1: 50, y1: 50, x2: 70, y2: 30, color: '#ff6347' },
        { x1: 60, y1: 80, x2: 40, y2: 60, color: '#4db1ff' },
        { x1: 30, y1: 40, x2: 50, y2: 70, color: '#ffcc00' },
        { x1: 70, y1: 60, x2: 30, y2: 30, color: '#00ff7f' },
      ],
      // 模拟城市点数据
      cities: [
        { x: 50, y: 30, value: 90 },
        { x: 70, y: 40, value: 60 },
        { x: 30, y: 50, value: 30 },
        { x: 60, y: 70, value: 50 },
        { x: 40, y: 60, value: 80 },
      ]
    };
  },
  methods: {
    getLineStyle(line) {
      return {
        left: `${line.x1}%`,
        top: `${line.y1}%`,
        width: `${Math.sqrt(Math.pow(line.x2 - line.x1, 2) + Math.pow(line.y2 - line.y1, 2))}%`,
        transform: `rotate(${Math.atan2(line.y2 - line.y1, line.x2 - line.x1) * 180 / Math.PI}deg)`,
        transformOrigin: 'left center',
        backgroundColor: line.color
      };
    },
    getPointStyle(color) {
      return {
        backgroundColor: color
      };
    },
    getCityStyle(city) {
      return {
        left: `${city.x}%`,
        top: `${city.y}%`
      };
    }
  }
};
</script>

<style scoped>
.map-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.map-outline {
  position: relative;
  width: 100%;
  height: 100%;
}

.attack-line {
  position: absolute;
  height: 2px;
  background-color: #4db1ff;
  z-index: 1;
}

.attack-point {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4db1ff;
  right: -4px;
  top: -3px;
  animation: pulse 1.5s infinite;
}

.city-point {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(77, 177, 255, 0.2);
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.city-label {
  color: #ffcc00;
  font-weight: bold;
  font-size: 14px;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style> 