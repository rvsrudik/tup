<template>
  <div
    class="custom-scrollbar flex-grow overflow-y-auto p-4 rounded-2xl bg-white"
  >
    <ChatIncomingMessage />
    <ChatMyMessage :isViewed="true" />
    <ChatIncomingMessage />
    <ChatMyMessage :isViewed="true" />
    <ChatIncomingMessage />
    <ChatMyMessage :isViewed="true" />
    <ChatIncomingMessage />
    <ChatMyMessage :isViewed="false" />
  </div>
</template>

<script setup>
import ChatMyMessage from './ChatMyMessage.vue';
import ChatIncomingMessage from './ChatIncomingMessage.vue';
</script>

<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #dab8d5 transparent;
}
</style>
