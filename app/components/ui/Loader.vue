<template>
  <div class="loader">
    <span v-for="(dot, index) in dots" :key="index" :style="dotStyle" class="dot"></span>
  </div>
</template>

<script setup>
const props = defineProps({
  size: {
    type: Number,
    default: 10,
  },
  color: {
    type: String,
    default: '#000',
  },
});

const dots = [1, 2, 3];

const dotStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  backgroundColor: props.color,
}));
</script>

<style scoped>
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 36px;
}

.dot {
  display: inline-block;
  border-radius: 50%;
  animation: bounce 1s infinite ease-in-out both;
}

.dot:nth-child(1) {
  animation-delay: -0.32s;
}

.dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>
