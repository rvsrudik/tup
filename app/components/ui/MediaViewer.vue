<template>
  <div class="contents" @click="show = true">
    <Teleport to="body">
      <div
        v-if="show"
        @click="show = false"
        class="fixed z-[100] flex justify-center items-center w-full h-full left-0 top-0 p-4 bg-gray-200 bg-opacity-80"
      >
        <button class="text-black text-2xl absolute top-6 right-6 p-3" @click="show = false">x</button>
        <img v-if="type === 'image'" :src="src" alt="Preview image" @click.stop />
        <video v-else-if="type === 'video'" :src="src" />
      </div>
    </Teleport>

    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'image',
  },
  src: {
    type: String,
  },
});

const show = ref(false);
</script>
