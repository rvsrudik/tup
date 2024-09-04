<template>
  <svg
    :class="svgClass"
    width="24"
    height="12"
    viewBox="0 0 24 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 12L12 0L0 12H24Z" fill="currentColor" stroke="none" />
  </svg>
</template>

<script setup>
const props = defineProps({
  left: Boolean,
  right: Boolean,
});

const svgClass = computed(() => {
  if (props.left) return 'absolute bottom-0 -left-3 text-slate-200';
  if (props.right) return 'absolute bottom-0 -right-3 text-purple-300';
  return '';
});
</script>
