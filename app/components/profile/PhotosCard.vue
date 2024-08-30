<template>
  <div class="shadow-sm bg-white p-6 rounded-xl">
    <h2 class="font-bold text-center mb-6">Photos</h2>

    <div class="grid grid-cols-2 gap-4">
      <UploadMedia />
      <UploadMedia />
      <UploadMedia />
      <UploadMedia />
    </div>
  </div>
</template>

<script setup>
import UploadMedia from '@/components/ui/UploadMedia';
</script>
