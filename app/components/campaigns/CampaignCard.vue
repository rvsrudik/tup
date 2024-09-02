<template>
  <div class="rounded-lg bg-slate-200">
    <div
      class="rounded-lg bg-cover bg-center h-52 relative bg-[url(https://cdn.pixabay.com/photo/2024/04/04/03/08/ai-generated-8674235_1280.png)]"
    >
      <span class="absolute bottom-8 left-3 bg-blue-100 px-2 py-1 rounded-3xl text-xs text-purple-900">Active</span>
    </div>

    <div class="bg-slate-200 rounded-lg p-4 z-10 relative -top-5 -mb-5">
      <h5 class="text-purple-800 font-bold mb-1">Hygiene products</h5>
      <div class="text-purple-900 font-bold"><span class="text-purple-200">$545/</span>$650</div>

      <p
        class="text-sm mt-4 overflow-hidden text-ellipsis webkit-box text-left [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] leading-5 max-h-9"
      >
        {{ description }}
      </p>

      <AppButton class="w-full mt-3">Lend a hand</AppButton>
    </div>
  </div>
</template>

<script setup>
import AppButton from '@/components/ui/AppButton';

const description = `This vehicle will be a critical resource, providing safe and reliable transportation for women who need immediate help. Whether it's getting them to safety, taking them to crucial appointments. This vehicle will be a critical resource, providing safe and reliable transportation for women who need immediate help. Whether it's getting them to safety, taking them to crucial appointments`;
</script>
