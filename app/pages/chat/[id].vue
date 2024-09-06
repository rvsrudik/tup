<template>
  <div class="custom-height flex flex-col gap-6 h-full min-h-[390px]">
    <ChatWindow> </ChatWindow> <ChatInput />
  </div>
</template>

<script setup>
import ChatWindow from '@/components/chat/ChatWindow';
import ChatInput from '@/components/chat/ChatInput';
</script>

<style scoped>
.custom-height {
  max-height: calc(100dvh - 180px);
}

@media screen and (max-width: 480px) {
  .custom-height {
    max-height: calc(100dvh - 240px);
  }
}
</style>
