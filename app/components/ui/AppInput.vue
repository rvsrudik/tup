<template>
  <input class="h-10 rounded-lg border border-gray-100 px-2 py-3" type="text" :placeholder="label" />
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
});
</script>
