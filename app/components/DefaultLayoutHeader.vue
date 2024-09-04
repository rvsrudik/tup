<template>
  <header class="flex items-start justify-between mb-4">
    <div>
      <h2 class="text-[26px] text-gray-800 font-bold font-montserrat">Current contributors</h2>
      <div class="h-[2px] w-[45px] bg-purple-900 mt-1"></div>

      <h3 class="mt-4 text-sm text-slate-500">Photos and names of the people managing the funds.</h3>
    </div>

    <div class="flex gap-2">
      <button class="rounded-full w-10 h-10 bg-slate-200 flex justify-center items-center">
        <img src="~/assets/icons/bell-icon.svg" alt="Bell icon" />
      </button>

      <UDropdown :items="items" :popper="{ arrow: true }">
        <div class="bg-slate-200 flex items-center gap-2 py-1 px-2 rounded-full">
          <div class="w-8 h-8 bg-red-200 rounded-full shadow-md"></div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.95906 4.47461L6.69906 7.73461C6.31406 8.11961 5.68406 8.11961 5.29906 7.73461L2.03906 4.47461"
              stroke="#8288B6"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <!-- <UButton color="white" label="Options" trailing-icon="i-heroicons-chevron-down-20-solid" /> -->
      </UDropdown>
    </div>
  </header>
</template>

<script setup>
const items = [
  [
    {
      label: 'Profile',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
      },
    },
  ],
];
</script>
