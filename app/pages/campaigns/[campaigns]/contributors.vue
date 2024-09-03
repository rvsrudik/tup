<template>
  <div class="grid gap-8">
    <DonorSpotlight selectable />
    <CampaignsSection />
  </div>
</template>

<script setup>
import CampaignsSection from '@/components/campaigns/CampaignsSection';
import DonorSpotlight from '~/components/campaigns/DonorSpotlight.vue';
</script>
