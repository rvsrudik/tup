<template>
  <div class="text-sm flex gap-[10px] items-center">
    <input type="checkbox" class="w-4 h-4 accent-purple-800" :id="name" :name="name" @change="handleChange(value)" />
    <label :class="[errorMessage ? 'text-red-400' : '']" :for="name">{{ label }}</label>
  </div>
</template>

<script setup>
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
  },
  label: {
    type: String,
  },
});

const name = toRef(props, 'name');

const { checked, handleChange, errorMessage } = useField(name, undefined, {
  type: 'checkbox',
  checkedValue: props.value,
});

// const {
//   value: inputValue,
//   errorMessage,
//   handleBlur,
//   handleChange,
//   meta,
// } = useField(name, undefined, {
//   initialValue: props.value,
// });
</script>
