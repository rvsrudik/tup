<template>
  <div class="flex min-h-dvh">
    <AppSidebar />
    <div class="[background:#F8FBFE] flex-grow">
      <slot />
    </div>
  </div>
</template>

<script setup>
import AppSidebar from '@/components/AppSidebar';
</script>
