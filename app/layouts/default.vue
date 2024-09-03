<template>
  <div class="flex [background:#F8FBFE]">
    <AppSidebar />
    <div class="w-full">
      <div class="flex-grow py-10 pl-14 pr-2 md:pr-20 h-dvh overflow-auto w-full mx-auto max-w-screen-2xl">
        <slot class="mx-auto" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppSidebar from '@/components/AppSidebar';
</script>
