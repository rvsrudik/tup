<template>
  <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" class="circular-progress">
    <circle
      class="bg"
      :style="{
        cx: `${size / 2}px`,
        cy: `${size / 2}px`,
        r: `${(size - strokeWidth) / 2}px`,
        strokeWidth: `${strokeWidth}px`,
      }"
    ></circle>
    <circle
      class="fg"
      :style="{
        cx: `${size / 2}px`,
        cy: `${size / 2}px`,
        r: `${(size - strokeWidth) / 2}px`,
        strokeWidth: `${strokeWidth}px`,
        stroke: color,
        transformOrigin: `${size / 2}px ${size / 2}px`,
        strokeDasharray: `calc((${progress} * calc(calc((${size}px - ${strokeWidth}px) / 2) * pi * 2)) / 100) 
                          calc(calc(calc((${size}px - ${strokeWidth}px) / 2) * pi * 2) - calc((${progress} * calc(calc((${size}px - ${strokeWidth}px) / 2) * pi * 2)) / 100))`,
      }"
    ></circle>
  </svg>
</template>

<script setup>
const props = defineProps({
  size: {
    type: Number,
    default: 150,
  },
  color: {
    type: String,
    default: '#457325',
  },
  strokeWidth: {
    type: Number,
    default: 5,
  },
  progress: {
    type: Number,
    default: 10,
  },
});
</script>

<style scoped>
.circular-progress circle {
  fill: none;
  stroke-linecap: round;
}

.circular-progress circle.bg {
  stroke: #f4f5f7;
}

.circular-progress circle.fg {
  transform: rotate(-90deg);
}
</style>
