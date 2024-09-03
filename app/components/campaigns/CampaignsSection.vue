<template>
  <section class="bg-white grid gap-4 px-4 pt-4 pb-8 rounded-xl shadow-md">
    <div class="flex justify-between">
      <h6 class="font-montserrat font-medium text-gray-900 text-xl">Campaigns</h6>
      <button class="text-sm text-purple-800">See all</button>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <CampaignsCard />
      <CampaignsCard />
      <CampaignsCard />
    </div>
  </section>
</template>

<script setup>
import CampaignsCard from './CampaignCard.vue';
</script>
