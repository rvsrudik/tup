<template>
  <div class="flex flex-col md:flex-row md:items-center relative">
    <!-- :style="{ transform: `translateX(${(imgSize * (images.length - 1)) / 2}px)` }" -->
    <div class="relative flex md:translate-x-[125px]">
      <img
        v-for="(img, i) in images"
        :key="i"
        src="https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"
        alt="Donated user avatar"
        :width="imgSize"
        :height="imgSize"
        class="rounded-full"
        :style="{ transform: `translateX(${i * -50}%)` }"
      />
    </div>

    <div class="md:ml-6 mt-4 md:mt-0 font-montserrat">100+ people donated</div>
  </div>
</template>

<script setup>
const images = [0, 1, 2, 3, 4, 5];
const imgSize = 50;
</script>
