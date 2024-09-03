<template>
  <div class="grid gap-8">
    <DonateStatisticsSection />
    <DonorSpotlight selectable />
    <CampaignsSection />
  </div>
</template>

<script setup>
import DonateStatisticsSection from '@/components/campaigns/DonateStatisticsSection.vue';
import CampaignsSection from '@/components/campaigns/CampaignsSection';
import DonorSpotlight from '@/components/campaigns/DonorSpotlight.vue';
</script>
