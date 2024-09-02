<template>
  <div
    class="bg-purple-900 fixed z-50 h-full md:h-auto md:relative [transition:width_300ms]"
    :class="[isOpen ? 'w-[280px] px-6' : 'w-12 px-2']"
  >
    <img src="~/assets/images/logo.svg" width="105" class="mt-4 mb-10" alt="logo" />

    <AppNav :mini="!isOpen" />

    <img src="~/assets/images/arrow-up.svg" width="54" alt="arrow-icon" class="absolute left-6 top-1/2" />
    <img src="~/assets/images/arrow-up.svg" width="103" alt="arrow-icon" class="absolute left-20 top-[65%]" />
    <img src="~/assets/images/arrow-up.svg" width="54" alt="arrow-icon" class="absolute right-6 top-[55%]" />

    <button
      class="absolute -right-4 top-10 bg-slate-50 rounded-full w-8 h-8 flex justify-center items-center shadow-md"
      @click="isOpen = !isOpen"
    >
      <img
        src="~/assets/icons/double-arrow-left.svg"
        class="transition-transform"
        :class="[!isOpen ? 'rotate-180' : '']"
        alt="toggle-menu-icon"
      />
    </button>
  </div>
</template>

<script setup>
import AppNav from '@/components/AppNav';

const isOpen = ref(true);
</script>
