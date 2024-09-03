<template>
  <div class="flex [background:#F8FBFE]">
    <AppSidebar />
    <div class="w-full">
      <div class="flex-grow py-10 pl-14 pr-2 md:pr-20 min-h-dvh w-full mx-auto max-w-screen-2xl">
        <DefaultLayoutHeader />
        <slot class="mx-auto" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppSidebar from '@/components/AppSidebar';
import DefaultLayoutHeader from '@/components/DefaultLayoutHeader';
</script>
