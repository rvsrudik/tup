<template>
  <nav
    class="bg-purple-900 relative [transition:width_300ms]"
    :class="[isOpen ? 'w-[250px] px-6' : 'w-10 md:hover:w-[250px] md:hover:px-6']"
  >
    <img src="~/assets/images/logo.svg" width="85" class="mt-4" alt="logo" />

    <img src="~/assets/images/arrow-up.svg" width="54" alt="arrow-icon" class="absolute left-6 top-1/2" />
    <img src="~/assets/images/arrow-up.svg" width="103" alt="arrow-icon" class="absolute left-20 top-[65%]" />
    <img src="~/assets/images/arrow-up.svg" width="54" alt="arrow-icon" class="absolute right-6 top-[55%]" />

    <button
      class="absolute -right-4 top-14 bg-slate-50 rounded-full w-8 h-8 flex justify-center items-center shadow-md"
      @click="isOpen = !isOpen"
    >
      <img
        src="~/assets/icons/double-arrow-left.svg"
        class="transition-transform"
        :class="[!isOpen ? 'rotate-180' : '']"
        alt="toggle-menu-icon"
      />
    </button>
  </nav>
</template>

<script setup>
const isOpen = ref(true);
</script>
