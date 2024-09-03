<template>
  <div class="bg-white p-4 rounded-2xl shadow-md h-56 flex flex-col justify-between">
    <div class="flex items-center gap-2">
      <div class="w-7 h-7 bg-slate-100 rounded-full flex justify-center items-center">
        <img src="~/assets/icons/dollar-circle-icon.svg" alt="Dollar icon" />
      </div>
      <span class="text-sm text-gray-300">Total donors</span>
    </div>

    <div class="flex flex-col justify-center items-center">
      <div class="text-[32px] text-purple-900 font-bold">9</div>
      <div class="text-gray-300">Total</div>
    </div>

    <div class="flex justify-between">
      <div class="flex items-center text-xs">
        <div class="w-2 h-2 mr-2 bg-purple-800 rounded-sm"></div>
        <div class="text-slate-500 mr-1">New</div>
        <div class="text-gray-300">4.2K</div>
      </div>

      <div class="flex items-center text-xs">
        <div class="w-2 h-2 mr-2 bg-purple-400 rounded-sm"></div>
        <div class="text-slate-500 mr-1">Available</div>
        <div class="text-gray-300">4.2K</div>
      </div>
    </div>
  </div>
</template>
