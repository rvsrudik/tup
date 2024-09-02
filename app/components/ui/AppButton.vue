<template>
  <button
    class="px-10 h-12 rounded-[120px] text-gray-50 flex items-center justify-center w-fit"
    :class="[...buttonBg, ...buttonColor, ...buttonBorder, ...buttonShadow, ...buttonSizes[size]]"
  >
    <slot>{{ title }}</slot>
  </button>
</template>

<script setup>
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
});

const buttonSizes = {
  base: ['h-8'],
  xl: ['h-12'],
};

const buttonBg = computed(() => {
  return [props.outline ? 'bg-white' : 'bg-purple-800'];
});

const buttonColor = computed(() => {
  return [props.outline ? 'text-slate-700 hover:bg-blue-100' : 'text-gray-50'];
});

const buttonBorder = computed(() => {
  return [props.outline ? 'border border-purple-300 hover:border-transparent' : ''];
});

const buttonShadow = computed(() => {
  return [props.shadow ? '[box-shadow:0px_1px_12.3px_0px_#3964711C] active:shadow-none' : ''];
});
</script>
