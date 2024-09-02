<template>
  <div class="flex items-center gap-4">
    <div class="relative flex justify-center items-center">
      <ProgressCircle :size="100" :strokeWidth="4" :progress="10" color="#457325" />
      <ProgressCircle :size="70" :strokeWidth="4" :progress="20" class="absolute" color="#DF4B9A" />
      <div class="flex flex-col gap-1 text-center absolute">
        <span class="text-gray-900 text-xs">9235</span>
        <span class="text-gray-300 text-[9px]">Total</span>
      </div>
    </div>

    <div class="grid gap-2">
      <div class="font-montserrat font-medium text-xl text-purple-900">
        <span class="text-slate-500 mr-2">Goal</span> {{ new Intl.NumberFormat().format(16000) }}
      </div>
      <div class="flex items-center text-sm text-slate-500">
        <div class="w-2 h-2 rounded-sm bg-[#DF4B9A] mr-1"></div>
        Received <span class="text-gray-300 ml-1">{{ new Intl.NumberFormat().format(9000) }}</span>
      </div>
      <div class="flex items-center text-sm text-slate-500">
        <div class="w-2 h-2 rounded-sm bg-[#457325] mr-1"></div>
        Necessary <span class="text-gray-300 ml-1">{{ new Intl.NumberFormat().format(9000) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProgressCircle from '@/components/ui/ProgressCircle';
</script>
