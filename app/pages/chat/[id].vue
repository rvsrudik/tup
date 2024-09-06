<template>
  <!-- <div>hello</div>
  {{ message }}
  <AppButton @click="foo">add</AppButton> -->
  <div class="flex flex-col gap-6 min-h-full h-full">
    <ChatWindow> </ChatWindow> <ChatInput />
  </div>
</template>

<script setup>
import ChatWindow from '@/components/chat/ChatWindow';
import ChatInput from '@/components/chat/ChatInput';

// function foo() {
//   message.value += 1;
// }
// const message = ref(1);
</script>
