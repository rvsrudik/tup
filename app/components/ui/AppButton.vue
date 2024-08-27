<template>
  <button
    class="px-10 h-12 rounded-[120px] text-gray-50 flex items-center justify-center"
    :class="[...buttonBg, ...buttonColor, ...buttonBorder, ...buttonShadow]"
  >
    <slot>{{ title }}</slot>
  </button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
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

const buttonBg = computed(() => {
  return [props.outline ? 'bg-white' : 'bg-purple-800'];
});

const buttonColor = computed(() => {
  return [props.outline ? 'text-slate-700 hover:bg-blue-100' : 'text-gray-50'];
});

const buttonBorder = computed(() => {
  return [props.outline ? 'border border-purple-300 hover:border-none' : ''];
});

const buttonShadow = computed(() => {
  return [props.shadow ? '[box-shadow:0px_1px_12.3px_0px_#3964711C] active:shadow-none' : ''];
});
</script>
