<template>
  <div class="relative p-4 pr-0 pb-12 rounded-2xl shadow-md bg-gray-50">
    <ul
      class="flex flex-wrap gap-y-2 gap-x-4 pr-4 pb-4"
      v-if="uploadedFiles.length > 0"
    >
      <li
        v-for="(file, index) in uploadedFiles"
        :key="index"
        class="relative bg-red-100 py-1 pl-2 pr-4 rounded-md"
      >
        <div
          class="text-ellipsis whitespace-nowrap overflow-hidden max-w-20 min-w-20 text-slate-500 text-xs"
        >
          {{ file.name }}
        </div>

        <button
          @click="removeUploadedFile(index)"
          class="absolute top-1 -right-1 bg-red-500 rounded-full p-[2px]"
        >
          <img
            src="~/assets/icons/x-3px.svg"
            width="12"
            height="12"
            alt="remove icon"
          />
        </button>
      </li>
    </ul>

    <textarea
      class="custom-scrollbar block resize-none w-full h-16 max-h-16 bg-gray-50 outline-none"
      name="message"
      id="chatMessage"
      placeholder="Enter text"
    ></textarea>

    <ChatFileUploader
      class="absolute bottom-4 left-4"
      @addedFiles="onAddedFiles"
    />

    <button class="absolute bottom-3 right-4" type="button">
      <img
        src="~/assets/icons/send-message-icon.svg"
        width="32"
        height="32"
        alt="send message icon"
      />
    </button>
  </div>
</template>

<script setup>
import ChatFileUploader from './ChatFileUploader';

const MAX_FILES_PER_MESSAGE = 6;
const uploadedFiles = ref([]);

function onAddedFiles(newFiles) {
  if (uploadedFiles.value.length + newFiles.length > MAX_FILES_PER_MESSAGE) {
    alert(`You can upload up to ${MAX_FILES_PER_MESSAGE} files in total.`);
    return;
  }

  uploadedFiles.value.push(...newFiles);
}

function removeUploadedFile(index) {
  uploadedFiles.value.splice(index, 1);
}
</script>

<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #dab8d5 transparent;
}
</style>
