<template>
  <div class="flex flex-col gap-8">
    <OrganisationCard />
    <PasswordChangeSection />
    <div class="flex gap-4">
      <AboutCard class="flex-grow" />
      <PhotosCard />
    </div>
    <CampaignsSection />
  </div>
</template>

<script setup>
import OrganisationCard from '@/components/profile/OrganisationCard';
import AboutCard from '@/components/profile/AboutCard';
import PhotosCard from '@/components/profile/PhotosCard';
import PasswordChangeSection from '@/components/profile/PasswordChangeSection';
import CampaignsSection from '@/components/profile/CampaignsSection';
</script>
