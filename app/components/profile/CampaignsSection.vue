<template>
  <section class="bg-white rounded-xl shadow-sm p-6 gap-4 grid">
    <div class="flex justify-between">
      <h2 class="font-bold">Your campaigns</h2>
      <button class="flex items-center">
        <img src="~/assets/icons/plus-filled.svg" alt="more campaign icon" class="mr-2" />
        Add more campaign
      </button>
    </div>

    <carousel :items-to-show="3" wrap-around :breakpoints="{}">
      <slide v-for="slide in 10" class="px-2" :key="slide">
        <div
          class="h-[291px] w-full bg-slate-200 flex justify-center items-center flex-col shadow-sm rounded-md"
          @click="isOpen = true"
        >
          <span class="text-sm font-bold">Add new campaign</span>
          <img src="~/assets/icons/square-plus.svg" class="w-8 h-8 mt-2" alt="add campaign icon" />
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </section>
</template>

<script setup></script>
