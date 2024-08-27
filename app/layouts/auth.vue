<template>
  <div class="bg-purple-900 min-h-screen p-6 lg:p-12 xl:p-16 2xl:p-36">
    <div class="flex flex-col md:flex-row items-center md:items-start xl:gap-36">
      <div class="md:w-1/2 text-white flex justify-center relative">
        <img
          src="~/assets/images/logo.svg"
          class="w-[300px] lg:w-[463px] mb-4 md:mb-0 md:mt-[70%] lg:mt-[30%]"
          alt="logo"
        />

        <img
          src="~/assets/images/arrow-up.svg"
          width="170"
          alt="arrow-icon"
          class="absolute hidden lg:block left-0 top-0"
        />
        <img
          src="~/assets/images/arrow-up.svg"
          width="170"
          alt="arrow-icon"
          class="absolute hidden lg:block right-0 top-[40%]"
        />
        <img
          src="~/assets/images/arrow-up.svg"
          width="323"
          alt="arrow-icon"
          class="absolute hidden md:block top-[95%]"
        />
      </div>
      <div class="lg:w-1/2 flex justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>
