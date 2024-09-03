<template>
  <div class="rounded-lg shadow-md p-4 grid gap-2">
    <div class="flex justify-between items-start">
      <div class="flex gap-4">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"
          class="w-11 h-11"
          alt="Donor avatar"
        />
        <div class="grid gap-2">
          <div class="text-purple-800 font-bold">Daniel Reed</div>
          <div class="text-xs text-gray-200">Marketing Director</div>
        </div>
      </div>

      <AppInputCheckbox v-if="selectable" />
    </div>

    <div class="flex gap-[7px] text-xs">
      <img src="~/assets/icons/amount-icon.svg" alt="Amount icon" class="w-4 h-4" />
      <span class="text-slate-500">Amount donated:</span>
      <span class="text-purple-800">200 $</span>
    </div>

    <div class="flex gap-[7px] text-xs">
      <img src="~/assets/icons/calendar-icon.svg" alt="Calendar icon" class="w-4 h-4" />
      <span class="text-slate-500">Date of donation:</span>
      <span class="text-purple-800">24 August 2024</span>
    </div>
  </div>
</template>

<script setup>
import AppInputCheckbox from '@/components/ui/AppInputCheckbox';

const props = defineProps({
  donor: {},
  selectable: {
    type: Boolean,
    default: false,
  },
});
</script>
