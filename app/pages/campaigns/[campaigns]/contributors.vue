<template>
  <div class="grid gap-8">
    <ContributorsFilters />
    <DonateStatisticsSection />
    <DonorSpotlight selectable />
    <CampaignsSection />
  </div>
</template>

<script setup>
import ContributorsFilters from '@/components/campaigns/ContributorsFilters.vue';
import DonateStatisticsSection from '@/components/campaigns/DonateStatisticsSection.vue';
import CampaignsSection from '@/components/campaigns/CampaignsSection';
import DonorSpotlight from '@/components/campaigns/DonorSpotlight.vue';
</script>
