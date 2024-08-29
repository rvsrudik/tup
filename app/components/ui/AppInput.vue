<template>
  <div class="w-full">
    <label v-if="label" :for="name" class="font-bold mb-2 flex text-sm">{{ label }}</label>
    <input
      class="h-10 w-full rounded-lg border border-gray-100 px-2 py-3 placeholder:text-gray-400 placeholder:text-sm"
      :id="name"
      :class="{ 'border-red-400 text-red-400': !!errorMessage, success: meta.valid }"
      :type="type"
      :name="name"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />
    <p class="text-xs text-red-400" v-show="errorMessage || meta.valid">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup>
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});

const name = toRef(props, 'name');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>
