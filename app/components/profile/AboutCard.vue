<template>
  <div class="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
    <h2 class="font-bold">About</h2>

    <textarea placeholder="Description" class="w-full rounded-xl border p-3 placeholder:text-sm min-h-40"></textarea>

    <AppInput placeholder="Paste a video URL" />
  </div>
</template>

<script setup>
import AppInput from '@/components/ui/AppInput';
</script>
