<template>
  <button class="px-10 h-12 bg-purple-800 rounded-[120px] text-gray-50">{{ title }}</button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
