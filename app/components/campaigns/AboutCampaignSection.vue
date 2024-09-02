<template>
  <section class="bg-white grid gap-6 p-4 rounded-xl shadow-md">
    <h2 class="font-montserrat font-semibold text-2xl text-gray-800">About campaigh</h2>

    <div class="flex flex-col md:flex-row md:justify-between gap-8">
      <GoalChart />
      <DonatedPeopleWidget />
    </div>
  </section>
</template>

<script setup>
import GoalChart from '@/components/campaigns/GoalChart';
import DonatedPeopleWidget from '@/components/campaigns/DonatedPeopleWidget';
</script>
