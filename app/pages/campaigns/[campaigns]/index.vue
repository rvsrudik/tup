<template>
  <div class="grid gap-8">
    <AboutCampaignSection />
    <OtherCampaigns />
    <DonorSpotlight />
  </div>
</template>

<script setup>
import AboutCampaignSection from '~/components/campaigns/AboutCampaignSection.vue';
import DonorSpotlight from '~/components/campaigns/DonorSpotlight.vue';
import OtherCampaigns from '~/components/campaigns/OtherCampaigns.vue';
</script>
