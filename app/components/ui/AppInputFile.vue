<template>
  <label class="h-10 rounded-lg border border-gray-100 px-2 text-xs relative items-center flex">
    <input class="opacity-0 absolute w-full h-full left-0 top-0" type="file" :placeholder="label" />
    <div class="flex">
      Upload your tax determination
      <img src="~/assets/icons/upload.svg" alt="upload-icon" class="ml-2" />
    </div>
  </label>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
});
</script>
