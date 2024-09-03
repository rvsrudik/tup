<template>
  <div class="rounded-xl shadow-md p-4 grid gap-2">
    <div class="flex gap-4">
      <img
        src="https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"
        class="w-[68px] h-[68px]"
        alt="Donor avatar"
      />
      <div class="flex justify-center flex-col gap-1">
        <div class="text-purple-800 font-bold">Hygiene products</div>

        <div class="flex gap-[7px] text-xs">
          <img src="~/assets/icons/amount-icon.svg" alt="Amount icon" class="w-4 h-4" />
          <span class="text-slate-500">Target amount</span>
          <span class="text-purple-800">200 $</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  donor: {},
});
</script>
