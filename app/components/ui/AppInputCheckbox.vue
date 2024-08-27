<template>
  <div class="text-sm">
    <input :id="name" type="checkbox" /> <label :for="name">{{ label }}</label>
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
