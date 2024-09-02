<template>
  <div class="relative flex justify-center items-center">
    <ProgressCircle :size="100" :strokeWidth="4" :progress="10" color="#457325" />
    <ProgressCircle :size="70" :strokeWidth="4" :progress="20" class="absolute" color="#DF4B9A" />
    <div class="flex flex-col gap-1 text-center absolute">
      <span class="text-gray-900 text-xs">9235</span>
      <span class="text-gray-300 text-[9px]">Total</span>
    </div>
  </div>
</template>

<script setup>
import ProgressCircle from '@/components/ui/ProgressCircle';
</script>
