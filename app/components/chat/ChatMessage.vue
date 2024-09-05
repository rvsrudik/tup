<template>
  <div class="relative border-t p-4 pt-6">
    <div
      :class="[
        'flex gap-4 relative w-full md:w-[90%] p-4 pr-8 rounded-lg',
        name === targetUsername ? 'bg-red-100 ml-auto' : 'bg-slate-200 mr-auto',
      ]"
    >
      <div
        v-if="name !== targetUsername"
        class="hidden md:block md:min-w-10 lg:min-w-16 md:min-h-10 lg:min-h-16 rounded-full overflow-hidden"
      >
        <img
          class="w-10 h-10 lg:w-16 lg:h-16 rounded-full object-cover"
          :src="!avatar ? defaultAvatar : avatar"
          alt="user image blank"
          width="64"
          height="64"
        />
      </div>
      <div>
        <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
          <div class="text-base font-semibold text-purple-900">
            {{ name }}
          </div>
          <div class="text-slate-500 text-xs opacity-75">
            {{ formattedDateTime }}
          </div>
        </div>
        <div class="text-sm text-slate-500">
          {{ text }}
        </div>
      </div>
      <ChatStatusMessage v-if="name === targetUsername" :isViewed="isViewed" />
      <svg
        :class="svgClass"
        width="24"
        height="12"
        viewBox="0 0 24 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 12L12 0L0 12H24Z" fill="currentColor" stroke="none" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import defaultAvatar from '~/assets/images/image-pic.png';
import ChatStatusMessage from './ChatStatusMessage';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: '',
  },
  files: {
    type: Array,
    default: () => [],
  },
  isViewed: {
    type: Boolean,
    default: false,
  },
});

const dateTimeFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'medium', // Наприклад: "Sep 4, 2024"
  timeStyle: 'short', // Наприклад: "4:30 PM"
});

const formattedDateTime = dateTimeFormatter.format(props.date);

const targetUsername = 'Alexander Johnson';

const svgClass = computed(() => {
  if (props.name !== targetUsername) {
    return 'absolute bottom-0 -left-3 text-slate-200';
  }

  return 'absolute bottom-0 -right-3 text-red-100';
});
</script>

<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #dab8d5 transparent;
}
</style>
