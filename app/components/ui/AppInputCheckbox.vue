<template>
  <div class="text-sm flex gap-[10px] items-center">
    <input
      type="checkbox"
      class="w-4 h-4 accent-purple-800"
      :id="name"
      :name="name"
      :checked="modelValue"
      @change="onChange"
    />
    <label v-if="label" :class="[errorMessage ? 'text-red-400' : '']" :for="name">{{ label }}</label>
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
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const name = toRef(props, 'name');

const { checked, handleChange, errorMessage } = useField(name, undefined, {
  type: 'checkbox',
  checkedValue: props.value,
});

function onChange(value) {
  emit('update:modelValue', value.target.checked);
  handleChange(value.target.checked);
  // handleChange(value);
}
</script>
