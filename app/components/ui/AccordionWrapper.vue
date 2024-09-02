<template>
  <div class="grid gap-4">
    <div class="flex justify-between bg-slate-200 rounded-lg px-4 py-2 cursor-pointer" @click="show = !show">
      <h5>{{ title }}</h5>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="!show ? 'rotate-180' : ''"
      >
        <path
          d="M17 14L12 10L7 14"
          stroke="#677382"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <slot v-if="show"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
});

const show = ref(true);
</script>
