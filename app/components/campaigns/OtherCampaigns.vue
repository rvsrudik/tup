<template>
  <section class="bg-white grid gap-4 px-4 pt-4 pb-8 rounded-xl shadow-md">
    <h6 class="font-montserrat text-gray-900">Other campaigns</h6>

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
        <CampaignCard />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </section>
</template>

<script setup>
import CampaignCard from '@/components/campaigns/CampaignCard.vue';
</script>

<style scoped>
:deep(button.carousel__prev),
:deep(button.carousel__next) {
  position: absolute;
  top: -45px;
}
:deep(button.carousel__prev) {
  left: unset;
  right: 45px;
}
</style>
