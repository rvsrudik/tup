<template>
  <div class="text-sm flex gap-[10px] items-center">
    <input :id="name" type="checkbox" class="w-4 h-4 accent-purple-800" />
    <label :for="name">{{ label }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  },
});
</script>
