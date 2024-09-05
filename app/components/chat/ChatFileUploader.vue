<template>
  <div>
    <label for="file-upload" class="cursor-pointer">
      <img
        src="~/assets/icons/image-add.svg"
        width="24"
        height="24"
        alt="file add icon"
      />
    </label>
    <input
      @change="onInput"
      class="hidden"
      id="file-upload"
      type="file"
      multiple
    />
  </div>
</template>

<script setup>
const emit = defineEmits(['added-files']);

const filesExt = [
  'image/jpeg',
  'image/png',
  'video/mp4',
  'video/quicktime',
  'video/x-msvideo',
  'video/x-matroska',
];

const maxFileSize = 30 * 1024 * 1024;

const onInput = (event) => {
  const validFiles = [...event.target.files].filter((file) => {
    return filesExt.includes(file.type) && file.size <= maxFileSize;
  });

  if (event.target.files.length > validFiles.length) {
    alert(
      'Only the following formats are allowed: jpeg, png, jpg, mp4, mov, avi, mkv.'
    );
  }

  emit('addedFiles', validFiles);
  event.target.value = '';
};
</script>
