<template>
  <button
    class="relative px-10 h-12 rounded-[120px] text-gray-50 flex items-center justify-center w-fit"
    :class="[...buttonBg, ...buttonColor, ...buttonBorder, ...buttonShadow, ...buttonSizes[size]]"
  >
    <div :class="isLoading ? 'opacity-0' : 'opacity-100'" class="flex transition-opacity duration-300">
      <slot>{{ title }}</slot>
    </div>
    <Loader v-if="isLoading" :color="outline ? '#733E84' : '#fff'" />
  </button>
</template>

<script setup>
import Loader from './Loader.vue';

const props = defineProps({
  title: {
    type: String,
  },
  size: {
    type: String,
    default: 'base',
  },
  outline: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const buttonSizes = {
  base: ['h-8'],
  xl: ['h-12'],
};

const buttonBg = computed(() => {
  return [props.outline ? 'bg-white hover:bg-blue-100' : 'bg-purple-800  hover:bg-purple-900'];
});

const buttonColor = computed(() => {
  return [props.outline ? 'text-slate-700' : 'text-gray-50'];
});

const buttonBorder = computed(() => {
  return [props.outline ? 'border border-purple-300 hover:border-transparent' : ''];
});

const buttonShadow = computed(() => {
  return [props.shadow ? '[box-shadow:0px_1px_12.3px_0px_#3964711C] active:shadow-none' : ''];
});
</script>
