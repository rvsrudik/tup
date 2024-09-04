<template>
  <div class="relative border-t p-4 pt-6">
    <div
      class="relative w-full md:w-[90%] ml-auto bg-purple-300 p-4 pr-8 rounded-lg"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere
      deleniti quae veniam aliquam voluptatibus qui fugiat aliquid labore optio
      similique maxime velit doloremque, nostrum nulla placeat voluptatem natus
      illum esse animi harum asperiores quo? Quisquam error sequi in ratione
      nostrum voluptates numquam, dolor, atque maiores optio sit vitae incidunt.
      <ChatStatusMessage :isViewed="isViewed" />
      <ChatMessageDecor :right="true" />
    </div>
  </div>
</template>

<script setup>
import ChatMessageDecor from './ChatMessageDecor';
import ChatStatusMessage from './ChatStatusMessage.vue';

const props = defineProps({
  isViewed: {
    type: Boolean,
    default: false,
  },
});
</script>
