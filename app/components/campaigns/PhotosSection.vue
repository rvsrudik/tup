<template>
  <section>
    <carousel
      :items-to-show="1"
      wrap-around
      :breakpoints="{
        768: {
          itemsToShow: 2,
        },
        1024: {
          itemsToShow: 3,
        },
      }"
    >
      <slide v-for="slide in 10" class="px-2" :key="slide">
        <MediaViewer
          src="https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg"
        >
          <div
            class="rounded-lg bg-cover bg-center w-full h-52 relative bg-[url(https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg)]"
          ></div>
        </MediaViewer>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </section>
</template>

<script setup>
import MediaViewer from '@/components/ui/MediaViewer';
</script>
